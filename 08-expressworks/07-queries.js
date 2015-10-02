var express = require('express');

var app = express();

// Respond to /search with JSON object of request parameters
app.get('/search', function (req, res) {;
  res.send(req.query);
});

// Start server and listen on specified port
app.listen(process.argv[2]);
