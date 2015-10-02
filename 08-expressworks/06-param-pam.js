var crypto = require('crypto');
var express = require('express');

var app = express();

// Define hashing function
function calcHash(inp) {
  return crypto.createHash('sha1')
               .update(new Date().toDateString() + inp)
               .digest('hex');
}

// Parse params from URL and send back hash
app.put('/message/:id', function(req, res) {
  res.end(calcHash(req.params.id));
})

// Alternatively use middleware:
// app.param('id', function (req, res, next, id) {
//   req.id = id;
//   next();
// })
//
// app.put('/message/:id', function (req, res, next) {
//   res.send(calcHash(req.id));
//   next();
// })

// Start server and listen
app.listen(process.argv[2]);
