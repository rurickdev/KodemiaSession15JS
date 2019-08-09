// * ------ Exercise 1 ------ * //
// Create an object car and show his keys and values
let car = {
  'model': 'Aveo',
  'year': 2012,
  'brand': 'chevrolet',
  'color': 'ninja gray',
  'dorsNumber': 4,
  'seatsNumber': 3,
  'hasSpareTire': true,
  'tireType': {
    'rimSize': 5.5,
    'rimUnit': 'inchs',
    'sizes': [
      '155/80 R13',
      '175/70 R13',
      '185/60 R14',
      '185/55 R15'
    ]
  },
  'motor': {
    'type': 'some type'
  }
}

for (let key in car) {
  console.log(`${key}:${car[key]}`)
}

console.table(car)

// * ------ Exercise 2 ------ * //
// Create an Array of schoolGrades Objects and show
// the average grade and the worst grade course

let schoolGrades = [
  {
    'course': 'HTML',
    'grade': 8.3
  },
  {
    'course': 'CSS',
    'grade': 9.1
  },
  {
    'course': 'Bootstrap',
    'grade': 9.2
  },
  {
    'course': 'SASS',
    'grade': 7.5
  },
  {
    'course': 'JavaScript',
    'grade': 8.9
  },
  {
    'course': 'Kode Days',
    'grade': 7.2
  },
]

let average = (schoolGrades.reduce((a, { grade }) => a + grade, 0) / schoolGrades.length)
console.log(average)

let coursWithWorstGrade = schoolGrades.reduce((a, b) => a.grade < b.grade ? a : b).course
console.log(worstGrade)

// ? ------ Homework 1 ------ ? //
// Caesar encryption algorithm

let word = 'superc alif rajilisticoz'

const encrypt = (word, shift = 0) => {
  let encryptedWord = String()

  for (let index = 0; index < word.length; index++) {
    let letterAsciiCode = word.charCodeAt(index) + shift
    if (letterAsciiCode === (32 + shift)) {
      letterAsciiCode -= shift
    } else if (letterAsciiCode > 122) {
      letterAsciiCode -= 26
    }
    encryptedWord = `${encryptedWord}${String.fromCharCode(letterAsciiCode)}`
  }

  return encryptedWord
}

const decrypt = (word, shift = 0) => {
  let dencryptedWord = String()

  for (let index = 0; index < word.length; index++) {
    let letterAsciiCode = word.charCodeAt(index) - shift
    if (letterAsciiCode === (32 - shift)) {
      letterAsciiCode += shift
    } else if (letterAsciiCode < 97) {
      letterAsciiCode += 26
    }
    dencryptedWord = `${dencryptedWord}${String.fromCharCode(letterAsciiCode)}`
  }

  return dencryptedWord
}

const ENCRYPTED_WORD = encrypt(word, 3)
const DECRYPTED_WORD = decrypt(ENCRYPTED_WORD, 3)

console.log(`${word} => ${ENCRYPTED_WORD} => ${DECRYPTED_WORD}`)