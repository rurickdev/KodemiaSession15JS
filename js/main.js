// * ---- cadena usada en todos los ejercicios 1 y 2 ---- //
var cadena = 'Holi a todos'

// * ---- capitalizacion ---- //

// * ---- Truncamiento ---- //

// * ---- Matriz ---- //
var matriz = [[0, 0, 1], [1, 0, 1], [0, 9, 1]]

const countOnes = function (matriz) {
  let onesQuantity = Number()

  for (let index = 0; index < matriz.length; index++) {
    for (let jIndex = 0; jIndex < matriz[index].length; jIndex++) {
      if (matriz[index][jIndex] === 1) {
        onesQuantity++
      }
    }
  }

  return onesQuantity
}

const countNumbers = function (matriz) {
  let numbers = []
  let quantities = []
  let numbersQuantity = []

  for (let index = 0; index < matriz.length; index++) {
    for (let jIndex = 0; jIndex < matriz[index].length; jIndex++) {
      if (!numbers.includes(matriz[index][jIndex])) {
        numbers.push(matriz[index][jIndex])
        quantities.push(1)
        console.log('agregue un numero')
      } else {
        let numberIndex = numbers.indexOf(matriz[index][jIndex])
        quantities[numberIndex]++
        console.log('subió la cantidad de ', matriz[index][jIndex])
      }
    }
  }

  for (let numberIndex in numbers) {
    numbersQuantity.push([numbers[numberIndex], quantities[numberIndex]])
  }

  return numbersQuantity
}

// * ---- Uso de funciones ---- //

console.log(`Ejercicio Matriz: ${countOnes(matriz)} unos`)
console.log(`Ejercicio Matriz 2: ${countNumbers(matriz)}`)