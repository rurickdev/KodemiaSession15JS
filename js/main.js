// * ------ Exercise 1 ------ * //
var nodes = [
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
  {
    'tag': 'ul',
    'children': [
      {
        'tag': 'li',
        'text': 'enjoy'
      },
      {
        'tag': 'li',
        'text': 'otra'
      }, {
        'tag': 'li',
        'text': 'cosa'
      }, {
        'tag': 'li',
        'text': 'estudien!'
      }
    ]
  },
]
const buildNodes = (nodes, parent) => {
  nodes.forEach(({ tag, children }) => {
    let nodeParent = document.createElement(tag)
    children.forEach(({ tag, text }) => {
      let node = document.createElement(tag)
      let nodeText = document.createTextNode(text)
      node.appendChild(nodeText)
      nodeParent.appendChild(node)
    })
    nodeParent.classList.add('styled-list')
    parent.appendChild(nodeParent)
  })
}

const parent = document.getElementById('container')
buildNodes(nodes, parent)

// * ------ Exercise 2 ------ * //

let counter = 0

const showCount = (counterAlt) => {
  let textNode = document.getElementById('counter-text')
  textNode.textContent = counterAlt
}

const insertTextNode = () => {
  let body = document.getElementsByTagName('body')[0]
  let buttonContainer = document.getElementById('button-container')
  let text = document.createElement('span')
  text.id = 'counter-text'
  body.insertBefore(text, buttonContainer)
}

const count = () => {
  if (counter === 0) {
    insertTextNode()
  }
  counter++
  console.log(counter)
  showCount(counter)
}
