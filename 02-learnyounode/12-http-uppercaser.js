const http = require('http');
const map = require('through2-map');

var PORT = process.argv[2];

var server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});
server.listen(PORT);
