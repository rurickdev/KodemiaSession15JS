// * ------ Exercis 1 ------ * //
const ELEMENTS_LIST = document.getElementsByClassName('element')

for (let index = 0; index < ELEMENTS_LIST.length; index++) {
  ELEMENTS_LIST[index].innerHTML = `Element${index + 1}`
}

// * ------ Exercis 2 ------ * //
let imgList = document.getElementsByTagName('img')
let styles = [
  {
    src: 'https://picsum.photos/250',
    width: '25%',
    height: '25%'
  },
  {
    src: 'https://picsum.photos/250',
    width: '25%',
    height: '25%'
  },
  {
    src: 'https://picsum.photos/250',
    width: '25%',
    height: '25%'
  },
  {
    src: 'https://picsum.photos/250',
    width: '25%',
    height: '25%'
  },
]

const setImages = (images, elements) => {

  for (let index = 0; index < elements.length; index++) {
    const { src, width, height } = styles[index]
    elements[index].src = src
    elements[index].style.width = width
    elements[index].style.height = height
  }

}

setImages(styles, imgList)


// * ------ Exercis 3 ------ * //

let father = document.getElementById('container')
let nodes = [
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy 1'
      },
      {
        'tag': 'li',
        'text': 'enjoy 2'
      }, {
        'tag': 'li',
        'text': 'enjoy 3'
      }, {
        'tag': 'li',
        'text': 'enjoy 4'
      }
    ]
  }
]

const buildNodes = nodes => {
  let { children } = nodes[0]
  let ul = document.createElement(nodes[0].tag)

  father.appendChild(ul)

  children.forEach(child => {
    let { tag, text } = child
    let childElemnt = document.createElement(tag)
    childElemnt.innerHTML = text
    ul.appendChild(childElemnt)
  });
}

buildNodes(nodes)

