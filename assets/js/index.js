'use strict';

const btnOpen = document.querySelector('#btn1');
const btnClose = document.querySelector('#btn2');

const listener = (e) => {
  const temp = btnOpen.textContent;
  btnOpen.innerText = btnClose.textContent; 
  btnClose.innerText = temp;
}


btnOpen.addEventListener('mouseover', listener);
btnClose.addEventListener('mouseover', listener);


