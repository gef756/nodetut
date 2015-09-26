function repeat(operation, num) {
  if (num <= 0) {
    return;
  }
  //operation();
  return setInterval(operation, 1, --num);
}

module.exports = repeat;
