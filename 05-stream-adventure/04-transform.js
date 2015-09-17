const through = require('through2');

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var upper = through(write);

process.stdin.pipe(upper).pipe(process.stdout);
