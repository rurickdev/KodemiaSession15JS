// * ------ Example 1 ------ * //
const URL_BASE = 'HERE_GOES_THE_URL_FOR_THE_FIREBASE_DB'

let testObj = JSON.stringify({
  firstName: 'Darth',
  lastName: 'Vader',
  profession: "Lord Sith",
  fatherOf: {
    firstName: 'Luke',
    lastName: 'Skywalker',
    profession: "Jedi Master"
  }
})

let xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let response = JSON.parse(this.response)
    document.write(this.response)
    patchData(response)
  } else if (this.readyState === 4 && this.status >= 400) {
    console.log('No encontre nada perro');
  }
}
// * GET Data
xhttp.open('GET', `${URL_BASE}.json`)
xhttp.send()

// * POST Data
// xhttp.open('POST', `${URL_BASE}.json`)
// xhttp.send(hector)

// * ------ Exercise 1 ------ * //

let koder = JSON.stringify({
  firstName: 'Rurick',
  lastName: 'Maqueo',
  age: 25
})


const postData = (data) => {
  // * POST Data
  xhttp.open('POST', `${URL_BASE}.json`)
  xhttp.send(koder)
}

const getData = () => {
  // * GET Data
  xhttp.open('GET', `${URL_BASE}.json`)
  xhttp.send()
  return xhttp.response
}

const patchData = (koders) => {
  let xhttTwo = new XMLHttpRequest()
  let hashes = Object.keys(koders)

  let names = JSON.stringify({
    koders: hashes.map(hash => {
      koders[hash].firstName
    })
  })

  xhttTwo.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log('Exito')
    } else if (this.readyState === 4 && this.status === 400) {
      console.error('Error :\'v')
    }
  }

  xhttTwo.open('PATCH', `${URL_BASE}-LmSQ3UlqmOq4hOVnjCc.json`)
  xhttTwo.send(names)
}

// postData(koder)

getData()

const request = function (callback, method = 'GET', url = '', data = {}) {
  let response
  let xhttTwo = new XMLHttpRequest()

  xhttTwo.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      response = this.response
      callback(this.response)
    } else if (this.readyState === 4 && this.status === 400) {
      console.error('Error :\'v')
    }
  }

  xhttTwo.open(method, `${URL_BASE}${url}`)
  xhttTwo.send(names)

}