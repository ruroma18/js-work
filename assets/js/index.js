
const h1 = document.getElementById('mainHeader'); //find by id
const [h1v2] = document.getElementsByTagName('h1'); //find all tags by Tag Name

const queryH1 = document.querySelector('#mainHeader') //find by CSS selectors
const queryH1v2 = document.querySelector('#mainHeader > span')

h1.addEventListener('click', () => {
  alert('click h1')
}) // реагирование на нажатие на заголовок

