function reduce(arr, fn, initial) {
  if (arr.length === 1) {
    return fn(initial, arr[0]);
  } else {
    return reduce(arr.slice(1), fn, fn(initial, arr[0]));
  }
}

module.exports = reduce
