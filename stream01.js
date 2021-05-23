/**
 * Readable
 * Writable
 * Duplex
 */

const fs = require('fs');

const stream = fs.createReadStream('./data/restaurants.json');

let data = '';

stream.on('data', function(chunk) {
  data = data + chunk;
  console.log(chunk);
})

stream.on('end', function() {
  // console.log(data);
  console.log('finalizou');
})