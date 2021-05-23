const fs = require('fs');
const zlib = require('zlib');

const stream = fs.createReadStream('./data/03-Aula__Raiz.mp4');

const streamDestination = fs.createWriteStream('./aula.mp4.gz');

stream
  .pipe(zlib.createGzip())
  .pipe(streamDestination);