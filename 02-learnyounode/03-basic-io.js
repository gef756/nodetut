var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var lines = buf.toString().split('\n');
var numLines = lines.length - 1;
console.log(numLines);
