const user = {
  name: 'User',
  surname: 'Userenko',
  age: 42,
  address: {
    country: {
      europe: 'UA',
    },
    city: 'ZP',
  }
}

const { name,
  surname: lastname,
  address: { city, country: { europe } },
  address
} = user;


const arr = [5, 8, 7, 9, 6, 84, 69, 41, 0, 8154]

const [test1, test2, , test4] = arr;

const tuple = ['test article',{ text: 'lorem', author: ''} ]

const [title, articleData] = tuple;

const {text, author} = articleData