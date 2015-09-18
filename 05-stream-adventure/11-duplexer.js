var duplexer2 = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  var child = spawn(cmd, args, {stdio: ['pipe', 'pipe', process.stderr]});
  return duplexer2(child.stdio[0], child.stdio[1]);
};
