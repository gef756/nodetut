const directory = require('./06-directory.js');

const DIR_NAME = process.argv[2];
const FILE_EXT = process.argv[3];

function processData(err, data) {
  if (err) {
    console.log(err);
  } else {
    data.forEach(function (x) {
      console.log(x);
    });
  }
}

directory(DIR_NAME, FILE_EXT, processData);
