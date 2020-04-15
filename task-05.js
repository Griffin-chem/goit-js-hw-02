"use strict"
const checkForSpam = function (message) {
  const checkMessageArray = message.toLowerCase()
  return (checkMessageArray.includes('spam') || checkMessageArray.includes('sale'))
};