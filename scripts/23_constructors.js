// конструкторы

//function Human(name, lastName) {
//  const obj = {};
//  
//  // ...
//  
//  obj.name = name;
//  obj.lastName = lastName;
//  obj.getName = function () {
//    return this.name + ' ' + this.lastName;
//  };
//  
//  return obj;
//}
//
//const human = new Human('Name', 'LastName');
//
//console.log(human.getName());


// при создании экземпляра через ключевое слово new внутри функции конструктора создаётся св-во this = {}; (те пустой объект можно не создавать, а напрямую обращаться к this)

function Human(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.getName = function () {
    return this.name + ' ' + this.lastName;
  };
}

const human = new Human('Name', 'LastName');

console.log(human.getName());
