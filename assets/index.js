'use strict';

// const gessNumber = (number) => {
//   let startNum = 0;
//   let endNum = number;
//   let middleNum = Math.round(endNum / 2);



//   while (true) {
//     let askNum = confirm(middleNum);

//     if (askNum === true) {
//       alert(middleNum);
//       return middleNum;
//     }
//     let isBiggerNum = confirm(`Bigger than? ${middleNum}`)

//     if (isBiggerNum === true) {
//       startNum = middleNum;
//       middleNum = Math.ceil((endNum + startNum) / 2);
//     } else {
//       endNum = middleNum;
//       middleNum = Math.floor((endNum + startNum) / 2);
//     }
//   }


// }

const changeLetters = new Map();
changeLetters
  .set('h', 'r')
  .set('e', 'b')
  .set('l', 'a')
  .set('o', 'y')
  .set('t', 'v')
  .set('s', 'w')

const encryptStr = (str) => {
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (changeLetters.has(str[i])) {
      result.push(changeLetters.get(str[i]));
    } else {
      result.push(str[i]);
    }

  }
  return result.join('');
} 