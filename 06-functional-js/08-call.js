function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  var quacks = args.filter(function (arg) {
    var res = Object.prototype.hasOwnProperty.call(arg, 'quack');
    return res;
  });
  return quacks.length;
}

module.exports = duckCount;
