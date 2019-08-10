// // * ------ Exercise 1 ------ * //
// // abstract an object and put it a setter and a getter

// let bluetoothHeadphones = {
//   color: 'black',
//   charginPort: {
//     type: 'usb C'
//   },
//   battery: {
//     type: 'ion litio',
//     isCargin: 'discargin',
//     capacityValue: 3500,
//     capacityUnit: 'mA',
//     currentCharge: 1230
//   },
//   hasConector: {
//     value: true,
//     type: {
//       type: 'aux',
//       unit: 'um',
//       value: 3500
//     }
//   },
//   contected: false,
//   set changeConnection() {
//     this.contected = !this.connect
//   },
//   get batteryLevel() {
//     return `${(this.battery.capacityUnit * 100) / this.battery.currentCharge}`

//   }
// }

// * ------ Exercise 2 ------ * //
// Abstract beer
// create an array of beers using and array of [comaSeparatedValues] 

let beersData = [
  'xx,lager,cristal,355ml,4.2%,2020-10-4,98763456,$18.00',
  'xx,lager,cristal,355ml,4.2%,2020-10-4,56789323,$134.00',
  'xx,lager,cristal,355ml,4.2%,2020-10-4,12345458,$56.00',
  'xx,lager,cristal,355ml,4.2%,2020-10-4,75034553,$23.00',
  'xx,lager,cristal,355ml,4.2%,2020-10-4,75129693,$12.00'
]

function Beer(brand, type, recipent, volume, grade, expirationDate, ucp, color, cost) {
  this.brand = brand
  this.type = type
  this.recipent = recipent
  this.volume = volume
  this.grade = grade
  this.expirationDate = expirationDate
  this.ucp = ucp
  this.color = color
  this.cost = cost
}

let beers = beersData.reduce((carry, current) => {
  // ToDo: sacar la data
  return [
    ...carry,
    current
  ]
}, [])

