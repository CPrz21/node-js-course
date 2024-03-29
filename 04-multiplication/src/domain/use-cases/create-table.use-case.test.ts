import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {
  test('should create table with default values', () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2 });
    const rows = table.split('\n').length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain('2 x 1 = 2');
    expect(table).toContain('2 x 10 = 20');
    expect(rows).toBe(10);
  });

  test('should create table with custom values', () => {
    const base = 3;
    const limit = 20;

    const createTable = new CreateTable();
    const table = createTable.execute({ base, limit });
    const rows = table.split('\n').length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain(`${base} x 1 = ${base * 1}`);
    expect(table).toContain(`${base} x 10 = ${base * 10}`);
    expect(rows).toBe(limit);
  });
});
