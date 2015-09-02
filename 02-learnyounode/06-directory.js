const fs = require('fs');
const path = require('path');

function filteredLS(dir, ext, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) {
      return callback(err, null);
    }
    var files = data.filter(function (x) {
      return path.extname(x) === '.' + ext;
    })
    return callback(null, files);
  })
}

module.exports = filteredLS;
