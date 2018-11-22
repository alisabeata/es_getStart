// Модули

// один модуль -- одна задача



// CommonJS
// в браузере работает с browserify (http://browserify.org/)

/*
const numbers = require('./script-numbers.js');

console.log(numbers);
*/



// AMD

/*
define(['./script-numbers.js'], function (numbers) {
  console.log(numbers);
});
*/



// ES6 modules

// Если в экспорте не указан default, то переменные имортируются через диструктуризацию import {name} from '...';

// default в экспорте может быть только один



//import {myModule} from './script-numbers.js';
import myModule from './script-numbers.js';

console.log(myModule);




/* in script-numbers.js */

const numbers = [1, 2, 3, 4, 5];


// CommonJS
module.exports = numbers;


// AMD
define([], function () {
  return numbers;
});


// ES6 modules
export default numbers;
//export {numbers};
//export {numbers as myModule};
