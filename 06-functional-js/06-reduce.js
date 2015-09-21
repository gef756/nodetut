module.exports = function (inputWords) {
  var wordCounts = {}
  inputWords.map(function (word) {
    return wordCounts[word] = (wordCounts[word] || 0) + 1;
  });
  return wordCounts
}

function countWords2(inputWords) {
  return inputWords.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1;
    return countMap;
  }, {});
}
