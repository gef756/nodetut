function repeat(operation, num) {
  function recur(operation, num){
    if (num <= 0) return;
    operation();
    return recur.bind(null, operation, num - 1);
  }
  return trampoline(recur.bind(null, operation, num))
}

function trampoline(fn) {
  while (fn && fn instanceof Function) {
    fn = fn.apply(fn.context, fn.args)
  }
  return fn;
}


module.exports = function(operation, num) {
  return trampoline(repeat.bind(null, operation, num));
}
