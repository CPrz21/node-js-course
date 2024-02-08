import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  FileDestination: string;
}

export class ServerApp {
  // constructor(parameters) {

  // }

  static run({
    base,
    limit,
    showTable,
    FileDestination,
    fileName,
  }: RunOptions) {
    console.log('Server Running...');

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination: FileDestination,
      fileName,
    });

    if (showTable) console.log(table);

    wasCreated ? console.log('File Created') : console.log('File not created');
  }
}
