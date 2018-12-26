// всплытие hoisting

// var всплывает, let нет, так же у лет ограничена оюласть видимости блоком, а не функцией или глобальной областью видимотси как у var
// const тоже самое что и let, но нельзя переписывать значения



function fnc1() {
  console.log('до вызова fn112()');
  fnc2();
  console.log('после вызова fn112()');
}

function fnc2() {
  console.log('до вызова fn113()');
  fnc3();
  console.log('после вызова fn113()');
}

function fnc3() {
  console.log('внутри fn113');
}

console.log('до вызова fn111()');
fnc1();
console.log('после вызова fn111()');




// стек вызовов (call stack)
// (первым пришёл, последним ушёл)

// Global
// -- fnc1
// ---- fnc2
// ------ fnc3
