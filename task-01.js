"use strict"
const logItems = function(array) {
  for (let i=1; i<=array.length; i++) {
    console.log(`${i} - ${array[i-1]}`)
  }
}