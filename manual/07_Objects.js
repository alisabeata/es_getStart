// Объекты

const obj1 = {
  name: 'Somename',
  lastName: 'Somelastname',
  otherProp: 'test'
};

// перебор свойств
for (let prop in obj1) {
  console.log(prop);
  console.log(obj1[prop]);
}

// удаление свойства
delete obj1.otherProp;


console.log(obj1);
console.log('someProp' in obj1);

// проверка наличия св-ва
if ('someProp' in obj1) {
  console.log('свойство есть');
} else {
  console.log('нет такого свойства');
}


// hasOwnProperty
if (!obj1.hasOwnProperty('someProp')) {
  console.log('нет такого свойства 2');
}

console.log(Object.keys(obj1));



const obj2 = {
  name: 'SomeName'
};


// создание объекта (расширенное)
Object.defineProperty(obj2, 'prop', {
  configurable: false, // нельзя менять св-ва последующим объявлением defineProperty, по-умолчанию false
  enumerable: false, // убирает св-во из перечисления в for in и keys, по-умолч false
  value: 'test', // значение, по-умолч undefined
  writable: false, // перезапись, по-умолч false
  //get(){console.log('getting')}
  //set(){console.log('setting')}
});


console.log(obj2.prop);
