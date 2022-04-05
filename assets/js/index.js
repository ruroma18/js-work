// function makeAdder(X) {
//   let result = X;

//   function addY(Y) {
//     result += Y;
//     return result;
//   }

//   return addY;
// }

const makeAdder = (x) => (y) => (x += y); //сокращённая фун-ция 

const adder = makeAdder(100);