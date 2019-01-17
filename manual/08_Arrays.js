// Массивы
const arr1 = [1, 2, 3, 4, 5];


// очистка массива
arr1.length = 0; 


// удалить елемент в текущем массиве (не про иммутабельность, соу бэд), возвращает удалённый кусок массива
const delFromArr = arr1.splice(3, 1); 


// перезапись (возможно любое кол-во аргументов)
arr1.splice(2, 0, 'new val', 1, 1, 111, 112211); 



// конвертация массиовподобного объекта в массив
[].slice.call(arguments);
// or
Array.from(arguments); // этот способ также позволяет конвертировать генераторы в массивы



// * особенность добавления элементов в массив при перечислении циклом
const arr_1 = [];
const arr_2 = [];
const arr_3 = [];
const arr_4 = [];

for (var i = 0; i <= 3; i++) {
  arr_1[i] = function () {
    console.log(i);
  }
}

arr_1[0](); // 4
arr_1[1](); // 4
arr_1[2](); // 4
arr_1[3](); // 4


for (let j = 0; j <= 3; j++) {
  arr_2[j] = function () {
    console.log(j);
  }
}

arr_2[0](); // 0
arr_2[1](); // 1
arr_2[2](); // 2
arr_2[3](); // 3


for (var k = 0; k <= 3; k++) {
  (function (_k) {
    arr_3[_k] = function () {
      console.log(_k);
    }
  })(k);
}

arr_3[0](); // 0
arr_3[1](); // 1
arr_3[2](); // 2
arr_3[3](); // 3


for (let l = 0; l <= 3; l++) {
  arr_4[l] = function (_l) {
    console.log(_l);
  }.bind(null, l);
}

arr_4[0](); // 0
arr_4[1](); // 1
arr_4[2](); // 2
arr_4[3](); // 3
