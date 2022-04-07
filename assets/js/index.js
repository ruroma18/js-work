'use strict';

const imgContainer = ['https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
'https://i.pinimg.com/474x/01/88/dc/0188dc41881e0e410b5375cdead5f49a.jpg'];

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const img = document.querySelector('#slider');


let currentIndex = 0;

const btnListener = (direction = 'next') => {
  
  return function () {
    if (direction === 'next' && currentIndex + 1 >= imgContainer.length) {
      currentIndex = 0;
    } else if(direction === 'next' && currentIndex + 1 <= imgContainer.length) {
      currentIndex++;
    } else if (direction === 'prev' && currentIndex - 1 < 0) {
      currentIndex = imgContainer.length - 1;
    } else if (direction === 'prev' && currentIndex - 1 >= 0) {
      currentIndex--;
    }
    img.setAttribute('src', imgContainer[currentIndex]);
  };
};

prevBtn.addEventListener('click', btnListener('prev'));
nextBtn.addEventListener('click', btnListener('next'));
