// Функции

function fn() {
  let sum = 0;
  
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  
  console.log(sum);
}

fn(1,2,23,4,5,7);

// declaration -- объявление
function fn2(a, b) {
  return a + b;
}

// expression -- выражение
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

// стрелочная функция -- всегда фанкшн экспрешн


const a = [1, 2, 3, 4, 5];

const a2 = a.map(num => num * num);

console.log(a2);
