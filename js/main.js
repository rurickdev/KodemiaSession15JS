// * ------ Exercis 1 ------ * //
const ELEMENTS_LIST = document.getElementsByClassName('element')

for (let index = 0; index < ELEMENTS_LIST.length; index++) {
  console.log(index)
  ELEMENTS_LIST[index].innerHTML = `Element${index + 1}`
}
