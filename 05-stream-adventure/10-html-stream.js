const through = require('through2');
const trumpet = require('trumpet');

var tr = trumpet();
tr.pipe(process.stdout);


var stream = tr.select('.loud').createStream();
stream.pipe(through(function (buff, _, next) {
  stream.end(buff.toString().toUpperCase());
  next();
}));

process.stdin.pipe(tr);
