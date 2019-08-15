// * ------ Exercise 1 ------ * //
// change color with click

let elementBody = document.getElementsByTagName('body')[0]

const changeColor = ({ target: { style } }) => {
  style.backgroundColor === 'peru' ? style.backgroundColor = 'black' : style.backgroundColor = 'peru'
}

elementBody.addEventListener('click', changeColor)

// * ------ Exercise 2 ------ * //
// change color with mouseOver and mouseOut

const changeColorGray = ({ target: { style } }) => {
  style.backgroundColor = 'gray'
}
const changeColorBlue = ({ target: { style } }) => {
  style.backgroundColor = 'blue'
}

const addListeners = () => {
  let listElements = document.getElementsByClassName('list-item')

  for (let index = 0; index < listElements.length; index++) {
    const li = listElements[index]
    li.addEventListener('mouseover', changeColorBlue)
    li.addEventListener('mouseout', changeColorGray)
  }
}

addListeners()
