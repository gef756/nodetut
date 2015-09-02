const net = require('net');
const strftime = require('strftime');

var PORT = process.argv[2];

var server = net.createServer(function (socket) {
  var data = strftime('%Y-%m-%d %H:%M\n')
  socket.end(data);
});

server.listen(PORT);
