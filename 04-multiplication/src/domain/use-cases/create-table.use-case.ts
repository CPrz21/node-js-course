export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    const array = Array.from(Array(limit));
    let outputMessage = '';

    array.forEach((_, index) => {
      outputMessage += `${base} x ${index + 1} = ${base * (index + 1)}`;
      if (index + 1 !== limit) {
        outputMessage += '\n';
      }
    });

    return outputMessage;
  }
}
