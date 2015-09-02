const concat = require('concat-stream');
const http = require('http');

var URL = process.argv[2];

http.get(URL, function (resp) {
  resp.pipe(concat(function (data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
