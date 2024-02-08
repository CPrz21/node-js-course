import fs from 'fs';

import { args } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = args;

const array = Array.from(Array(limit));

let data = `
========================
      Tabla del ${base}      
========================
`;

array.forEach((_, index) => {
  data += `${base} x ${index + 1} = ${base * (index + 1)}\n`;
});

const outputPath = 'outputs';

if (showTable) {
  console.log(data);
}

fs.mkdirSync(outputPath, { recursive: true });

// append data to file
fs.appendFile(
  `${outputPath}/tabla-${base}.txt`,
  data,
  'utf8',
  function (err: any) {
    if (err) throw err;
    console.log('Data is appended to file successfully!');
  }
);
