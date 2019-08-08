let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

numbers.forEach(number =>
  console.log(`Number ${number} is even?: ${(number % 2) === 0}`))

// * ------ Exercises ------ * //

let words = ['asff', 'qwr', 'qad', 'AQwrqrwr', 'asd']

let wordsStartingWithA = words.filter(word => word[0] === 'A' || word[0] === 'a')
console.log(wordsStartingWithA)

let numbersTwo = [1, 2, -3, 4, -5, -6, 7, -4, 8]

console.log(`${numbersTwo.every(number => number % 2 === 0 && number > 0)
  ? 'all are positve and even'
  : 'at least one number is negative'}`)

let total = Number()
numbersTwo.map(numero => numero ** 2).forEach(number => total += number)
console.log(total)

let totalTwo = numbersTwo.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue ** 2, 0)
console.log(totalTwo)



