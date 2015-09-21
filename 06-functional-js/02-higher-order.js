module.exports = function (f, num) {
  for (var i = 0; i < num; i++) {
    f();
  }
}
