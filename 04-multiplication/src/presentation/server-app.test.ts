import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe('ServerApp', () => {
  const options = {
    base: 2,
    limit: 10,
    showTable: true,
    FileDestination: 'outputs',
    fileName: 'table',
  };
  test('should create a server app instance', () => {
    const serverApp = new ServerApp();
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe('function');
  });

  test('should run ServerApp with options', () => {
    // const logSpy = jest.spyOn(console, 'log');
    // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
    // ServerApp.run(options);
    // expect(logSpy).toHaveBeenCalledWith('Server Running...');
    // expect(logSpy).toHaveBeenLastCalledWith('File Created');
    // expect(createTableSpy).toHaveBeenCalledTimes(1);
    // expect(createTableSpy).toHaveBeenLastCalledWith({
    //   base: options.base,
    //   limit: options.limit,
    // });
    // expect(saveFileSpy).toHaveBeenCalledTimes(1);
    // expect(saveFileSpy).toHaveBeenCalledWith({
    //   fileContent: expect.any(String),
    //   destination: options.FileDestination,
    //   fileName: options.fileName,
    // });
  });

  test('should run with custom values mocked', () => {
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
    const saveFileMock = jest.fn().mockReturnValue(true);

    console.log = logMock;
    console.error = logErrorMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledWith('Server Running...');
    expect(createMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveFileMock).toHaveBeenCalledWith({
      destination: options.FileDestination,
      fileContent: '1 x 2 = 2',
      fileName: options.fileName,
    });
    expect(logMock).toHaveBeenCalledWith('File Created');
    expect(logErrorMock).not.toHaveBeenCalledWith();
  });
});
