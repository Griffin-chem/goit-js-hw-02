"use strict"
const formatString = function (string) {
  let returnString
  returnString = (string.length <= 40) ? string : (string.slice(0, 39) + "...")
  return returnString
}