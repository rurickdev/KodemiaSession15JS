// * ------ Exercise/Example 1 ------ * //
// Bubbling and capturing

document.getElementById('first').addEventListener('click', function ({ target }) {
  console.log('padre', target);
}, true)
document.getElementById('second').addEventListener('mouseover', function ({ target }) {
  console.log('hijo', target);
})
document.getElementById('third').addEventListener('click', function ({ target }) {
  console.log('nieto', target);
}, true)

// * ------ Exercise/Example 2 ------ * //
// get json data

var xhttp = new XMLHttpRequest()
var res = ''
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.response)
    res = this.response
    document.write(JSON.parse(res).firstName)
  } else if (this.readyState === 4 && this.status === 404) {
    console.log('No encontre nada perro');
  }
}
xhttp.open("GET", "data.json")
xhttp.send()

