'use strict';

const importedModule = require('./MyMath.js')

const { MyMath } = importedModule;

console.log(importedModule);
const result = MyMath.subtract(5, 40, -25);

console.log(result);