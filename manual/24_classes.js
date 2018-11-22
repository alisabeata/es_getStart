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

console.log(human1.getName());


// наследование классов

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
    
    //return result * result;
    
    // для es2017
    
    // ** -- оператор возведения в квадрат
    
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

const calc = new Calc();

console.log(calc.sum(10, 2));

const sqrCalc = new SqrCalc();

console.log(sqrCalc.sum(10, 2));

// чтобы переопределить конструктор у родителя, нужно вызвать super(); из constructor() {};

class someClass extends otherClass {
  constructor() {
    super();
    //...
  }
}
