var path = require('path');
var express = require('express');
var app = express();

// Serve a static page provided as an arg, or use what's in the public folder.
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

// Port number for listening supplied as arg.
app.listen(process.argv[2]);
