// destructuring


// - деструктуризация массива
const str_1 = 'Name Surname Secondname Secondname2 text text text sometext';
const [name_1, , secondName_1, ...rest_1] = str_1.split(' ');
console.log(name_1, secondName_1, rest_1); // >> ["Secondname2", "text", "text", "text", "sometext"]


const str_2 = 'Name Surname Secondname text text text sometext';
const [name_2, ...rest_2] = str_2.split(' ');
console.log(name_2, rest_2); // >> ["Surname", "Secondname", "text", "text", "text", "sometext"]



// - деструктуризация объекта
const obj_1 = {
  name: 'Name',
  lastNameObj_1: 'Lastname',
  SecondNameObj_1: 'Secondname',
  hello() {
    console.log('hello!');
  },
};

const {
  name: nameObj_1,
  lastNameObj_1,
  SecondNameObj_1,
  some_var = 'какое-то значение',
  hello
} = obj_1;

// в отличие от массива можно менять порядок следования, но создаются 
// переменные только с именами идентичными названиям свойств, но можно создать 
// переменную внутри (прим с some_var), если some_var прийдёт в объект, 
// то значение по умолчанию будет перезаписано. Можно перезаписать значение 
// переменной см name: nameObj_1

console.log(nameObj_1, lastNameObj_1, SecondNameObj_1, some_var); // >> Name Lastname Secondname какое-то значение
console.log(hello()); // >> hello!
