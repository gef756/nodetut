var Spy = require('./12-function-spies');

var spy = Spy(console, 'error');
console.error('hello');
console.error('blah');
console.error('yo yo yo');

console.log(spy.count);
