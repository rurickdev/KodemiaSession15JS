// ---------------- Exercise 1 ----------------
// * Area of a circle with 10[cm] of diameter

const DIAMETER = 10
const PI = 22 / 7 // 22/7 it's closser to PI than 3.14159
const RADIUS = DIAMETER / 2

const AREA = PI * (RADIUS ** 2)

console.log('Area: ', AREA)

// ---------------- Exercise 2 ----------------
// * Gived a number {number} , check if it's even

var number = true

if ((typeof number === 'number') && (number % 2 === 0)) {
  console.log('The number it\'s even')
} else if ((typeof number === 'number') && (number % 2 === 0)) {
  console.log('The number it\'s odd')
} else {
  console.log('It\'s invalid')
}

// ---------------- Exercise 2 ----------------
// * Check if the product of two numbers its prime and gretter than 40
// validate that the numbers are digits {numberOne} {numberTwo}

var numberOne = 17
var numberTwo = 5

if ((typeof numberOne === 'number') && (typeof numberTwo === 'number')) {
  var productOFOneAndTwo = numberOne * numberTwo
} else {
  console.log('One of the numbers its not a number')
}

// This exercise needs cycles, so i will try
// Using the primes of Fermant
// if (( && (productOFOneAndTwo > 40)) {
//   console.log('The product it\'s prime and gretter than 40')
}
