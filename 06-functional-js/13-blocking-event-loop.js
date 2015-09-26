function repeat(operation, num) {
  if (num <= 0) {
    return;
  }
  //operation();
  return setInterval(operation, 1, --num);
}

module.exports = repeat;


function repeat2(operation, num) {
  if (num <= 0) {
    return;
  }
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num);
    });
  } else {
    repeat(operation, --num);
  }
}
