function curryN(fn, n) {
  if (!n) {
    n = fn.length;
  }
  function _curryN(fn, n, args) {
    if (n === 1) {
      return function(x) {
        var fullArgs = args.concat(arguments[0]);
        return fn.apply(null, fullArgs);
      };
    }
    return function(x) {
      return _curryN(fn, n - 1, args.concat(x));
    };
  }
  return _curryN(fn, n, []);
}

module.exports = curryN;


// Reference solution

function curryNRef(fn, n) {
  n = n || fn.length
  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryNRef(fn.bind(this, arg), n - 1)
  }
}
