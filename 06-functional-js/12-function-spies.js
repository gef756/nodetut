function Spy(target, method) {
  var res = {count: 0};
  var oldFunction = target[method];
  target[method] = function() {
    res.count++;
    return Function.prototype.apply(oldFunction, arguments);
  }
  return res;
}

module.exports = Spy;
