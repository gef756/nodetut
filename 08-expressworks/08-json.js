var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if (err) {
      return res.sendStatus(500);
    }
    try {
      var theObj = JSON.parse(data.toString());
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(theObj);
  });
});

// Listen on specified port
app.listen(process.argv[2]);
