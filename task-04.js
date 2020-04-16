"use strict"
const formatString = function (string, maxStringLength) {
  let returnString
  returnString = (string.length <= maxStringLength) ? string : (string.slice(0, maxStringLength-1) + "...")
  return returnString
}