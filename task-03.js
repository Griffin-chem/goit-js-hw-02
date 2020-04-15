"use strict"
const findLongestWord = function (message) {
  const wordArray = message.split(' ')
  let longestWord = wordArray[0]
  for (let i = 1; i <= wordArray.length - 1; i++) {
    if (longestWord.length < wordArray[i].length) {
      longestWord = wordArray[i]
    }
  }
  return longestWord
};