// * ------ Exercise 1 ------ * //
// abstract an object and put it a setter and a getter

let bluetoothHeadphones = {
  color: 'black',
  charginPort: {
    type: 'usb C'
  },
  battery: {
    type: 'ion litio',
    isCargin: 'discargin',
    capacityValue: 3500,
    capacityUnit: 'mA',
    currentCharge: 1230
  },
  hasConector: {
    value: true,
    type: {
      type: 'aux',
      unit: 'um',
      value: 3500
    }
  },
  contected: false,
  set changeConnection(value) {
    this.contected = !this.connect
  },
  get batteryLevel() {
    return `${(this.battery.capacityUnit * 100) / this.battery.currentCharge}`

  }
}

// * ------ Exercise 2 ------ * //
// Abstract beer
// create an array of beers using and array of [comaSeparatedValues] 

let beersData = [
  'xx,lager,ampolleta,190,ml,4.2%,2020-10-4,98763456,dark,$18.00',
  'Heineken,six,lata,355,ml,4.2%,2020-10-4,56789323,light,$134.00',
  'indio,doce,lata,473,ml,4.2%,2020-10-4,12345458,light,$56.00',
  'victoria,caguama,cristal,1.2,Lt,4.2%,2020-10-4,75034553,mestiza,$23.00',
  'xx,lager,lata,355,ml,4.2%,2020-10-4,75129693,light,$12.00'
]

function Beer(brand, type, recipent, volumeValue, volumeUnit, grade, expirationDate, upc, color, cost) {
  this.brand = brand
  this.type = type
  this.recipent = recipent
  this.volumeValue = volumeValue
  this.volumeUnit = volumeUnit
  this.grade = grade
  this.expirationDate = expirationDate
  this.ucp = upc
  this.color = color
  this.cost = cost
}

let beers = beersData.reduce((carry, current) => {
  const beerData = current.split(',')
  let beer = new Beer(
    beerData[0],
    beerData[1],
    beerData[2],
    beerData[3],
    beerData[4],
    beerData[5],
    beerData[6],
    beerData[7],
    beerData[8],
    beerData[9]
  )
  return [
    ...carry,
    beer
  ]
}, [])

console.log(beers)

