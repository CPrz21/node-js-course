const runCommands = async (arggs: string[]) => {
  process.argv = [...process.argv, ...arggs];

  const { args } = await import('./args.plugin');

  return args;
};

describe('Test args.plugin.ts', () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test('should return default values', async () => {
    const argv = await runCommands(['-b', '5']);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'multiplication-table',
        d: 'outputs',
      })
    );
  });
  test('should return config with custom values', async () => {
    const b = 8;
    const l = 20;
    const s = true;
    const n = 'custom-name';
    const d = 'custom-outputs';

    const argv = await runCommands([
      '-b',
      `${b}`,
      '-l',
      `${l}`,
      '-s',
      `${s}`,
      '-n',
      n,
      '-d',
      d,
    ]);
    console.log('argv', argv);

    expect(argv).toEqual(
      expect.objectContaining({
        b,
        l,
        s,
        n,
        d,
      })
    );
  });
});
