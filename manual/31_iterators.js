// iterators

// итератор — это объект
// предназнаен для перебора другого объекта
// необходим метод next(), возвр объект {done: Boolean, value: val}


// [Symbol.iterator] делает объект итеррируемым (создание итератора вручную, необходим метод next(!))

arr[Symbol.iterator]


// для перебора итеррируемых объектов исп for ... of

let arr = [1, 2, 3];

for (let val of arr) {
  console.log(val)
}

for (let p = fn.next(); !p.done; p = fn.next()) {
  console.log(p.value);
}


// опереатор разворота ... так же исп итератор

// for ... of и спред опратор преобразуют массив в итеррируемый автоматически
