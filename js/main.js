//* ------------------- Excercise 1 -------------- *//
var name = 'Hector'
var index = name.length - 1

do {
  console.log(name[name.length - (index + 1)])
  index--
} while (index >= 0)

//* ------------------- Excercise 2 -------------- *//
var name2 = 'rotceH'
var index2 = name2.length - 1
var normalicedName = String()

do {
  normalicedName = `${normalicedName}${name2[index2]}`
  index2--
} while (index2 >= 0)

console.log(normalicedName)

//* ------------------- Excercise 3 -------------- *//
// check if the {word} has al least 3 vowels

var word = 'qewrty'
const VOWELS = ['a', 'e', 'i', 'o', 'u']
var vowelsQuantity = Number()

for (let index = 0; index < word.length; index++) {
  let leter = word[index].toLocaleLowerCase()

  for (let subIndex = 0; subIndex < VOWELS.length; subIndex++) {
    let vowel = VOWELS[subIndex]
    if (leter === vowel) {
      vowelsQuantity++
    }
  }
}

if (vowelsQuantity < 3) {
  console.error(`The Word ${word} dont have at least three vowels`)
} else {
  console.log(`The word ${word} have ${vowelsQuantity} vowels`)
}

//* ------------------- Excercise 4 -------------- *//
//How many multiples of 8 are inside the range
//{numberOne} - {numberTwo}
//  check that {numberOne} sould be less than {numberTwo}
//  check that both are positives

var numberOne = -10
var numberTwo = -5
var mutiplierQuantity = 0

if (numberTwo > numberOne) {
  if (numberOne > 0) {
    for (let index = numberOne; index <= numberTwo; index++) {
      let multiplier = index % 8
      if (multiplier === 0) {
        mutiplierQuantity++
      }
    }
    console.log(`There are ${mutiplierQuantity} multipliers in the range [${numberOne}, ${numberTwo}]`)
  } else if (numberTwo < 0) {
    console.error('ERROR: numberTwo should be positive')
  } else {
    console.error('ERROR: numberOne should be positive')
  }
} else {
  console.error('Error numberTwo should be bigger than numberOne')
}
