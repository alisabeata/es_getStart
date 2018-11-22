// Тестирование

// для тестирования кода обычно выносят тестовые кейсы с соседнюю директорию
// в файл с тестом импортируется модуль с тестируемым кодом и помещаются ожидайемые значения под условие

// использование тестов рекомендуется для модулей с основным функционалом, те для тех, без которых приложение не будет работать, либо для всего кода



// систематизация тестов



// test runers

// - mocha https://mochajs.org/

// npm install mocha -g
// mocha ./test

const Calc = require('...');

describe('Calc', function () { // describe группа тестов
  it('sum', function () { // it конкретный тестовый элемент
    const calc = new Calc();
    
    if (calc.sum(2, 2) !== 4) {
      throw new Error('do not work');
    }
  });
  
  it('div', function () {
    const calc = new Calc();
    
    if (calc.div(10, 2) !== 5) {
      throw new Error('do not work');
    }
  });
});


// assert
// библиотека assert идёт вместе с nodeJs, делает утверждения
// более подробно работает с обработкой ошибок, выбрасывает исключения с дополнительной информацией
// https://nodejs.org/api/assert.html


// chai assert
// http://www.chaijs.com/api/assert/

// более расширенная библиотека

// const assert = require('chai'); 

const Calc = require('...');
const assert = require('assert'); 

describe('Calc', () => {
  const calc = new Calc();
  
  it('sum', () => {
    assert.equal(calc.sum(2, 2), 4);
  });
  
  it('div', () => {
    assert.equal(calc.div(10, 2), 5);
  });
});


// code covarage

// abstract syntax tree: https://astexplorer.net/
// инструменторы: istanbul https://github.com/gotwarlost/istanbul

// test code => transform (istanbul) => mocha => report (from mocha) => report to istanbul => report (from istanbul about testing)

// npm install istanbul -g
// instanbul cover _mocha ./test

// >>> выводит результат покрытия тестами



// karma
// помогает тестировать функционал в браузере
// https://karma-runner.github.io/2.0/index.html



// процесс сборки и тестирования

// code => webpack (building) => instanbul => karma => mocha 
