const duplexer2 = require('duplexer2');
const stream = require('stream');

module.exports = function (counter) {
  var input = new stream.Writable({objectMode: true});

  var counts = {};
  input._write = function _write(input, enc, next) {
    var country = input.country;
    if (counts.hasOwnProperty(country)) {
      counts[country] += 1;
    } else {
      counts[country] = 1;
    }
    next();
  };

  input.on('finish', function () {
    counter.setCounts(counts);
  });


  return duplexer2(input, counter);
}
