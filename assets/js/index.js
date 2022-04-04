const btnUp = document.getElementById('btnUp');
const btnNull = document.getElementById('btnNull') 

let counter = 0;

const counterSpan = document.querySelector('#counterSpan');

const clickHandlerUp = () => {
  counterSpan.innerText = ++counter;
}

const clickHandlerNull = () => {
  counterSpan.innerText = counter = 0;
}

btnUp.addEventListener('click', clickHandlerUp);
btnNull.addEventListener('click', clickHandlerNull);

