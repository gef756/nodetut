function foo() {
  var bar;
  function zip() {
    var quux = 'hi';
    bar = true;
  }
  quux = 'bye';
  return zip;
}
