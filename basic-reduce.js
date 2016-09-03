'use strict';

function countWords(inputWords) {
  return inputWords.reduce((memo, word) => {
    memo[word] = word in memo ? memo[word] + 1 : 1;
    return memo;
  }, {});
}

module.exports = countWords;

