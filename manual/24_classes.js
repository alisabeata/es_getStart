// классы (es6)


// св-ва добавляются в constructor() {...}
class Human1 {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  
  getName() {
    return `${this.name} ${this.lastName}`;
  }
}

const human1 = new Human1('Name1', 'LastName1');
console.log(human1.getName()); // >> Name1 LastName1


// - extends наследование классов
class Calc {
  sum(a, b) {
    return a + b;
  }
  
  diff(a, b) {
    return a - b;
  }
  
  mul(a, b) {
    return a * b;
  }
  
  div(a, b) {
    return a / b;
  }
}


class SqrCalc extends Calc {
  sum(a, b) {
    const result = super.sum(a, b); // чтобы обратиться к методу родительского класса нужно исп слово super
    
    return result ** 2;
  }
  
  diff(a, b) {
    return super.diff(a, b) ** 2;
  }
  
  mul(a, b) {
    return super.mul(a, b) ** 2;
  }
  
  div(a, b) {
    return super.div(a, b) ** 2;
  }
}

const calc1 = new Calc();
console.log(calc1.sum(10, 2)); // >> 12

const sqrCalc = new SqrCalc();
console.log(sqrCalc.sum(10, 2)); // >> 144


// чтобы переопределить конструктор у родителя, нужно вызвать super(); из constructor() {};
class someClass extends otherClass {
  constructor() {
    super();
    //...
  }
}


// - стрелочные методы
class A {
  fun() {
    console.log(this);
  }
  
  arrowFun = () => {
    console.log(this);
  }
}

const a = new A();

a.fun(); // экземпляр класса А
a.arrowFun(); // экземпляр класса А

a.fun().call(null); // null
a.arrowFun().call(null); // экземпляр класса А


// - static статические методы/св-ва
// св-ва непосредственно конструктора, доступные через точку
// не могут быть вызваны у экземпляров (instance) класса
// для объявл исп слово static
class User {
  static someStaticMethod() {
    return 'someStaticMethod';
  }
}

console.log(User.someStaticMethod());
