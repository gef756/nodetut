var split = require('split');
var through = require('through2');

var isEven = false;

process.stdin
  .pipe(split())
  .pipe(through(function (line, _, next) {
    if (isEven) {
      this.push(line.toString().toUpperCase() + '\n');
    } else {
      this.push(line.toString().toLowerCase() + '\n');
    }
    isEven = !isEven;
    next();
  }))
  .pipe(process.stdout);
