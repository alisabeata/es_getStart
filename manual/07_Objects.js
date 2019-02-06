// Objects

// объект — это набор свойств
// каждое свойство имеет имя и значение
// у каждого объекта есть св-во constructor
// можно обратиться к св-ву constructor любого типа данных в js, следовательно в js всё явл объектом (кроме null и undefined)
// (!) typeof null === 'object', но null instanceof Object === false

(1).constructor             // >> Number()
true.constructor            // >> Boolean()
[].constructor              // >> Array()
"".constructor              // >> String()
(function(){}).constructor  // >> Function()
{}.constructor              // >> Object()
(/./).constructor           // >> RegExp()
NaN.constructor             // >> Number()



const obj1 = {
  name: 'Somename',
  lastName: 'Somelastname',
  otherProp: 'test'
};


// - перебор свойств
for (let prop in obj1) {
  console.log(prop);
  console.log(obj1[prop]);
}

// - удаление свойства
delete obj1.otherProp;


// - проверка наличия св-ва
if ('someProp' in obj1) {
  console.log('свойство есть');
} else {
  console.log('нет такого свойства');
}

// hasOwnProperty
if (!obj1.hasOwnProperty('someProp')) {
  console.log('нет такого свойства 2');
}



// - создание объекта (расширенное)
Object.defineProperty(obj2, 'prop', {
  configurable: false, // нельзя менять св-ва последующим объявлением defineProperty, по-умолчанию false
  enumerable: false, // убирает св-во из перечисления в for in и keys, по-умолч false
  value: 'test', // значение, по-умолч undefined
  writable: false, // перезапись, по-умолч false
  get(){console.log('getting')},
  set(){console.log('setting')}
});

// - добавляение св-ва из переменной
// в [] может исп выражение (не только переменная)
const a = 'somename';
const obj = {
  [a]: 1
};
console.log(obj); // >> {somename: 1}



// - this
// this — это объект в контексте которого вызывается функция
// контекст можно изменить вызовом
// .bind(), .call(), .apply()
// после изменения контекста, объект из которого вызывается функция больше не влияет на неё
// изменить контекст функции можно только один раз


// .bind(контекст)
// меняет контекст и возвр саму функцию, без вызова
// bind может накапливать аргументы

// .call(контекст, аргументы)
// меняет контекст и вызывает функцию
// аргументы переаются через запятую, произвольное кол-во
// исп если зарание известно кол-во аргументов

// .apply(контекст, [аргументы])
// меняет контекст и вызывает функцию
// аргументы передаются в виде массива
// исп если кол-во аргументов не известно

// (!) функция имеет контекст только если вызывается как метод объекта или с исп bind, call, apply, в ост случаях имеет глобальный контекст (window в браузере)
