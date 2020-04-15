"use strict"
const calculateEngravingPrice = function (message, pricePerWord) {
  const wordArray = message.split(' ')
  return (wordArray.length * pricePerWord)
}