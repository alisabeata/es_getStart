// generators

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

// function* возвр итератор с доступным методом next
// при первом вызове next 

// тк function* возвр итератор, его можно перебирать циклом for of

// yield прерывает выполнения генератора, при вызове next продолжает с текущего yield

function* generator() {
  yield 1;
  
  const a = yield 2; // yield возвр аргумент при вызове next()

  yield a + 1;
}

const interator = generator();

interator.next(2) // в const a вернётся значение 2




// передача значений

// yield и next могут передавать значения друг другу

function* generator() {
  let a = yield 1;
  console.log('a', a);  // >>> 'a', 2
}

let gen = generator();

let b = gen.next().value

console.log('b', b)    // >>> 'b', 1

gen.next(2).value



// для передачи генератора в генератор как параметра исп yield*

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

let gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
