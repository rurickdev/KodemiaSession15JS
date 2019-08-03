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
var normalicedName = ''

do {
  normalicedName = `${normalicedName}${name2[index2]}`
  index2--
} while (index2 >= 0)

console.log(normalicedName)