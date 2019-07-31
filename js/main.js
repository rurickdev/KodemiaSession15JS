// * How many days have you lived?

console.log('365 days for year: ', 25 * 365, 'days')

console.log('30 day for month: ', 30 * 12 * 25, 'days')

// * with a 4GB USB Memory, How many pictures of 3MB of size
// * could be saved? 

var memorySizeInGB = 4 * 1024
var pictureSize = 3

console.log(memorySizeInGB / pictureSize)

// * Parking with 22 lots, with space for 3 cars and 2 trucks each lot
/* 
  with 130 cars and 57 trucks

  how many lots are full?
  how many cars are not parked?
  how many trucks are not parked?
*/

var parkinglots = 22
var carsQuantity = 130
var truckQuantity = 57

var parkedCars = (parkinglots * 3)
var unparkedCars = carsQuantity - parkedCars

console.log('parked cars', parkedCars)
console.log('unparked cars', unparkedCars)

var parkedTruks = (parkinglots * 2)
var unparkedTrucks = truckQuantity - parkedTruks

console.log('parked trucks', parkedTruks)
console.log('unparked trucks', unparkedTrucks)

console.log('The parking is full? ', ((parkedTruks >= (parkinglots * 2) && (parkedCars >= (parkinglots * 3)))))





