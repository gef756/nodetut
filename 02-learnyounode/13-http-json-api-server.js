const http = require('http');
const url = require('url');

var PORT = process.argv[2];

var server = http.createServer(function (req, res) {
  // console.error('Server request received.');
  var endpoint = url.parse(req.url, true).pathname;
  // console.error('Requested ' + endpoint);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var iso = url.parse(req.url, true).query.iso;
  var theDate = new Date(iso);
  if (endpoint === '/api/parsetime') {
    // parse the time passed in
    var data = {
      'hour': theDate.getHours(),
      'minute': theDate.getMinutes(),
      'second': theDate.getSeconds()
    };
    res.end(JSON.stringify(data));
  } else if (endpoint === '/api/unixtime') {
    var data = { 'unixtime': theDate.getTime() };
    res.end(JSON.stringify(data));
  }
});
server.listen(PORT);
// console.error('Server up on ' + PORT);
// server.on('connection', function () {
//   console.error('Connection received.');
// });
