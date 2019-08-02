//* --------------- exercise 2 ------------ *//
// Search and explain a string method

//* --------------- exercise 2 ------------ *//
// Gived you name, birth Date, birth city and gender
// generate the first half of your CURP

var firstName = 'Rurick'
var lastName = 'Maqueo Poisot'
var birthDate = '12-03-1994'
var birthCity = 'Distrito Federal'
var gender = 'male'

var nameSection
  = lastName.slice(0, 2)
  + lastName.charAt(lastName.indexOf(' ') + 1)
  + firstName.charAt(0)

var birthDateSection
  = birthDate.slice(-2)
  + birthDate.slice(3, 5)
  + birthDate.slice(0, 2)

if (gender.charAt(0) === 'm') {
  var genderSection = 'H'
} else {
  genderSection = 'F'
}

var birthCitySection
  = birthCity.charAt(0).toUpperCase()
  + birthCity.charAt(birthCity.indexOf(' ') + 1).toUpperCase()

var curp = (nameSection + birthDateSection + genderSection + birthCitySection)
  .toUpperCase()

console.log(curp)