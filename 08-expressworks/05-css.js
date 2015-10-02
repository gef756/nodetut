var express = require('express');
var path = require('path');
var stylus = require('stylus');

// Set up application
var app = express();

// Use Stylus middleware to compile CSS
// Has to be before serving static pages
app.use(stylus.middleware(path.join(__dirname, 'static')));

// Serve static pages
app.use(express.static(path.join(__dirname, 'static')));

// Start server on port specified
app.listen(process.argv[2]);
