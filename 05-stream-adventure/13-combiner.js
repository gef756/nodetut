const combine = require('stream-combiner');
const split = require('split');
const through = require('through2');
const zlib = require('zlib');

module.exports = function () {
  var currentGenre = null;
  var genres = {};
  function write(buff, _, next) {
    var line = buff.toString();
    if (line) {
      var parsedLine = JSON.parse(line);
      if (parsedLine.type === 'genre') {
        currentGenre = parsedLine.name;
        genres[currentGenre] = [];
        // console.error('genre switched to ' + currentGenre);
      } else if (parsedLine.type === 'book') {
        genres[currentGenre].push(parsedLine.name);
        // console.error('parsing book ' + parsedLine.name);
      }
    }
    next();
  }

  function end(cb) {
    // console.error('end function called');
    var res = [];
    for (genre in genres) {
      // console.error('checking genre: ' + genre);
      if (genres.hasOwnProperty(genre)) {
        // console.error('Adding ' + genre);
        res.push(JSON.stringify({'name': genre, 'books': genres[genre]}));
      }
    }
    res = res.join('\n');
    this.push(res);
    cb();
  }

  return combine(split(),
                 through(write, end),
                 zlib.createGzip());
};
