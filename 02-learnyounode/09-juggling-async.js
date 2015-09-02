const concat = require('concat-stream');
const http = require('http');

const NUM_URLS = 3;

var results = [];
var callbacksRec = 0;

function getData(entry) {
  http.get(process.argv[entry + 2], function (res) {
    res.pipe(concat(function (data) {
      results[entry] = data.toString();
      callbacksRec++;
      if (callbacksRec == NUM_URLS) {
        for (var j = 0; j < NUM_URLS; j++) {
          console.log(results[j]);
        }
      }
    }));
  });
}

for (var i = 0; i < NUM_URLS; i++) {
  getData(i);
}
