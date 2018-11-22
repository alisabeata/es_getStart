// Функции

function fn() {
  let sum = 0;
  
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  
  console.log(sum);
}

fn(1,2,23,4,5,7);

// declaration — объявление
function fn2(a, b) {
  return a + b;
}

// expression — выражение
const fn3 = function (a, b) {
  return a + b;
};

console.log(fn2(1, 1));
console.log(fn3(1, 3));


function fn(otherFn) {
  otherFn();
}

function fn2() {
  console.log('hi');
}

fn(fn2);

// стрелочная функция — всегда фанкшн экспрешн

const a = [1, 2, 3, 4, 5];

const a2 = a.map(num => num * num);

console.log(a2);


// - Чистые функции
// Чистая функция в программировании — это такая функция, которая вычисляет результат только в зависимости от переданных ей аргументов. Такая функция не использует внешние (глобальные) переменные, не изменяет свои аргументы и всегда возвращает один и тот же результат от одних и тех же аргументов. 


// - Функции высшего порядка
// Функции высшего порядка — это функции, которые работают с другими функциями, либо принимая их в виде параметров, либо возвращая их
// прим. Array.prototype.map, .filter, .reduce
// https://habr.com/company/ruvds/blog/428570/
