'use strict';

const fs = require('fs/promises');

const addText = 'Hello world!'

fs.writeFile('./task.txt', addText, { encoding: 'utf-8', flag: 'a+' })
  .then((data) => data);

fs.readFile('./task.txt', 'utf-8').then((data) =>
  console.log(data)
)