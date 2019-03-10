// Console

// https://developer.mozilla.org/ru/docs/Web/API/Console

// - debugger (точки останова)
// отладка в дев тулз
debugger;


// - console
console.log('text');

// подстановка значений
// %s         выводит строку
// %d или %i  выведет число
// %o или %O  выводит ссылку на объект, нажатие на ссылку откроет инспектор кода
// %f         выведет число с плавающей точкой
// %c         стилезует вывод в консоль
console.log('text %s and %s', 'sometext', 'texxxt');


console.info('info');
console.warn('warn');
console.error('error');



console.group('group');
  console.group('level 1');
    console.log('level 2');
  console.groupEnd();
  console.group('level 1');
    console.log('level 2');
  console.groupEnd();
console.groupEnd();


// - замер производительности кода
console.time('timer 1');
for (let i = 1; i < 200; i++) {
  var h = i / i;
}
console.timeEnd('timer 1');


// - получение полной статистики по участку кода
console.profile('profile 1');

function f11() {
  console.log(1);
  
  function f12() {
    console.log(2);
    console.trace(); // (stack trace) показывает путь вызовов в стеке
  }
  
  f12();
  console.log(3);
}

f11();

console.profileEnd();
