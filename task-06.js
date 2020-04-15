"use strict"
let input
const numbers = []
let total = 0
input = prompt('Введите число')
while (input !== null) {
  if (Number(input)) {
    numbers.push(Number(input))
  } else {
    alert('Было введено не число, попробуйте еще раз')
  }
  input = prompt('Введите число')
}
if (numbers.length !== 0) {
  for (const elements of numbers) {
    total += elements
  }
  console.log(`Общая сумма чисел равна ${total}`)
} else {
  console.log('Не было введено ни одного числа')
}