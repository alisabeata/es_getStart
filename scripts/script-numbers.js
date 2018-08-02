const numbers = [1, 2, 3, 4, 5];


// CommonJS

/*
module.exports = numbers;
*/


// AMD

/*
define([], function () {
  return numbers;
});
*/


// ES6 modules

//export {numbers};
//export {numbers as myModule};
export default numbers;