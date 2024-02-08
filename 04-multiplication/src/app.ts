import { args } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

// console.log(args);

(async () => {
  main();
})();

async function main() {
  //   console.log(args);

  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: FileDestination,
  } = args;

  ServerApp.run({ base, limit, showTable, fileName, FileDestination });
}
