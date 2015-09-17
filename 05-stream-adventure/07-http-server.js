const fs = require('fs');
const http = require('http');
const through = require('through2');


var port_num = process.argv[2];

var screamer = through(writer, ender);

function writer(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function ender(done) {
  done();
}

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(screamer).pipe(res);
  }
});

server.listen(port_num);
