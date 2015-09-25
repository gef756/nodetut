function logger(namespace) {
  function parseArgs() {
    console.log.apply(null, arguments);
  }

  return parseArgs.bind(undefined, namespace);
}

module.exports = logger;

// Official solution:

function logger2(namespace) {
  return console.log.bind(console, namespace)
}
