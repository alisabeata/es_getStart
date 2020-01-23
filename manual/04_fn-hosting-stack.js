// всплытие hoisting


// var всплывает, let нет, так же у let ограничена область видимости блоком, 
// а не функцией или глобальной областью видимотси как у var

// const тоже самое что и let, но нельзя переписывать значения

// (!) функции-declaration всплывают
function foo() {
  function f() { return 10 }
  return f()
  function f() { return 7 }
}

foo() // >>> 7


function fnc1() {
  console.log('до вызова fn2()');
  fnc2();
  console.log('после вызова fn2()');
}

function fnc2() {
  console.log('до вызова fn3()');
  fnc3();
  console.log('после вызова fn3()');
}

function fnc3() {
  console.log('внутри fn3');
}

console.log('до вызова fn1()');
fnc1();
console.log('после вызова fn1()');

// до вызова fn1()
// до вызова fn2()
// до вызова fn3()
// внутри fn3
// после вызова fn3()
// после вызова fn2()
// после вызова fn1()




// стек вызовов (call stack)
// (первым пришёл, последним ушёл)

// Global
// -- fnc1
// ---- fnc2
// ------ fnc3
