function logger(namespace) {
  return function () {
    var fullArgs = Array.prototype.slice.call(arguments);
    fullArgs.unshift(namespace);
    console.log.apply(null, fullArgs);
  }
}

module.exports = logger;
