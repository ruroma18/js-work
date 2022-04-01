const user = {
  name: 'User',
  surname: 'Userenko',
  age: 42,
  gender: 'male',
  address: {
    country: 'UA',
    city: 'ZP',
  },
};

const { name,
  surname: lastname,
  address: { city, country }
} = user;


const arr1 = [5, 8, 7, 9, 6, 84, 69, 41, 0, 8154]

const [test1, test2, , test4] = arr1;

const tuple = ['test article', { text: 'lorem', author: '' }]

const [title, articleData] = tuple;

const { text, author } = articleData

const fileterdUser1 = {
  name: 'User',
  surname: 'Userenko',
  age: 42,
};

const { address, ...filteredUser2 } = user;

const [value1, value2, ...arr2] = arr1;

function printUserAddress({ address: { country, city } }) {
  return `Country: ${country}
City: ${city}`

}


// Map & Set

const map = new Map();

map.set(printUserAddress, 'test 0');
map.set(1, 'test 1');
map.set(2, 'test 2');

map.delete(2);

// for (const [key, value] of map) {
//   console.log(key);
//   console.log(value);
// }

// map.forEach((value, key, currentMap) => {
//   console.log(key);
//   console.log(value);
//   console.log(currentMap);
// });

// for (const [key, value] of map.entries()) {
//   console.log(key);
//   console.log(value);
// }

// for (const value of map.values()) {
//   console.log(value);
// }

// for (const key of map.keys()) {
//   console.log(key);
// }

const client1 = {
  name: 'Perod Prepodovich',
  level: 'basic',
  avalibleMoney: 15000,
}

const client2 = {
  name: 'Imagination NotFound',
  level: 'PRO',
  avalibleMoney: 250000,
}

const client23 = {
  name: 'Imagination NotFound',
  level: '-',
  avalibleMoney: 250000,
}

const bank2 = {
  name: 'Minibank',
  clientLevels: {
    basic: {
      discount: 0.025,
    },
    PRO: {
      discount: 0.1,
    },
  },
};


// const bankLevel = new Map();
// bankLevel.set('basic', 0.0025)
// bankLevel.set('PRO', 0.1)


// const calculateTotalPrice = (client, shoppingSum) => {
//   let resultPrice;

//   if (level === basic) {
//     resultPrice = shoppingSum - (shoppingSum * discount);
//     return resultPrice  
//   } else if (level === PRO) {
//     resultPrice = shoppingSum - (shoppingSum * discount);
//   } else {
//     return shoppingSum;
//   }


// }



const name1 = ['Alex', 'Petya', 'Natasha'];
const name2 = ['Pavlo', 'Anton'];
const name3 = ['Anton', 'Alex', 'Timur'];

const popularNames = new Set();

const findPopularNames = (...names) => {

  for (const {} of names) {
    
  }
  for (const name of i) {
    popularNames.add(name);
  }
  return popularNames;
}

// const lang = new Map();
// lang.set('en', 'Hello');
// lang.set('ru', 'Привет');
// lang.set('ua', 'Привiт');

// const askLang = prompt("Choose language: en, ru, ua");

// if (lang.has(askLang)) {
//   alert(lang.get(askLang));
// } else {
//   alert('Hello');
// }

const arr = [];

function addStr(number)  {
  if (number > 0) {
    arr.push(prompt('Enter smth'));
    addStr(number - 1);
  }
  return arr;
}

//try catch

try {
  console.log(1);

  console.log(abc);

  console.log(2);
} catch (error) {
  throw new RangeError('')
} finally {
  console.log('end')
}


