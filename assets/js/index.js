'use strict';

const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //предотвращает стандартное поведение( в данном случае - обновление страницы)
  e.stopPropagation(); //останавливает "всплытие"
  console.log(e);
})