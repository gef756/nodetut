const combine = require('stream-combiner');
const concat = require('concat-stream');
const crypto = require('crypto');
const tar = require('tar');
const through = require('through2');
const zlib = require('zlib');

var cipherName = process.argv[2];
var cipherKey = process.argv[3];

var cryptoStream = crypto.createDecipher(cipherName, cipherKey);

// var fileListing = through(function (chunk, _, next) {
//
// });

var zipper = zlib.createGunzip();

var parser = tar.Parse();
parser.on('entry', function (entry) {
  if (entry.type === 'File') {
    function writeOut(chunk, _, next) {
      this.push(chunk + ' ' + entry.path + '\n');
      next();
    }
    var cryptoHash = crypto.createHash('md5', { encoding: 'hex'});
    entry.pipe(cryptoHash).pipe(through(writeOut)).pipe(process.stdout);
  }
});

combine(process.stdin, cryptoStream, zipper, parser);
