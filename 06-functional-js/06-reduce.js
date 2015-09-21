module.exports = function (inputWords) {
  var wordCounts = {}
  inputWords.map(function (word) {
    return wordCounts[word] = (wordCounts[word] || 0) + 1; 
  });
  return wordCounts
}
