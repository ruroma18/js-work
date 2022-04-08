'use strict';

const div = document.querySelector('#root');
const [redBtn, greenBtn, blueBtn] = document.querySelectorAll('button');
 
const changeBg = (e) => {
  const {target: {dataset: {colorBtn}}} = e;
    div.style.backgroundColor = colorBtn;
}

redBtn.addEventListener('click', changeBg);
greenBtn.addEventListener('click', changeBg);
blueBtn.addEventListener('click', changeBg);