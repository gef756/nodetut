const http = require('http');

var URL = process.argv[2];


http.get(URL, function (resp) {
  resp.setEncoding('utf8');
  resp.on('data', console.log);
  resp.on('error', console.error);
});
