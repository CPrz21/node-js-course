import fs from 'fs';

import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {
  const customOptions = {
    fileContent: 'custom content',
    destination: 'custom-outputs',
    fileName: 'custom-table-name',
  };

  afterEach(() => {
    fs.existsSync('outputs') && fs.rmSync('outputs', { recursive: true });
    fs.existsSync(customOptions.destination) &&
      fs.rmSync(customOptions.destination, { recursive: true });
  });

  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content',
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    expect(result).toBeTruthy();
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test('should save file with custom values', () => {
    const saveFile = new SaveFile();
    const filePath = `${customOptions.destination}/${customOptions.fileName}.txt`;

    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);

    fs.rmSync(customOptions.destination, { recursive: true });
  });

  test('should return  false if directory could not be created', () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('Directory could not be created');
    });
    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test('should return  false if file could not be created', () => {
    const saveFile = new SaveFile();
    const writeFileSyncSpy = jest
      .spyOn(fs, 'writeFileSync')
      .mockImplementation(() => {
        throw new Error('File could not be created');
      });
    const result = saveFile.execute({ fileContent: 'Error Test' });

    expect(result).toBe(false);

    writeFileSyncSpy.mockRestore();
  });
});
