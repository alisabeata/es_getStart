// prototypes

const F = function () {
  this.setName(name);
};
  
const F2 = function () {
  this.setName(name);
  this.setAge(age);
};
  
F.prototype.setName = function (name) {
  this.name = name;
}

F2.prototype.setAge = function (age) {
  this.age = age;
}

// чтобы скопировать прототип объекта, без приравнивания, тк в этом случае новый и старый объекты будут ссылаться на один и тот же прототип (прим F.prototype = F2.prototype)

function inherit(child, parent) {
  const Temp = function () {};
  
  Temp.prototype = parent.prototype;
  child.prototype = new Temp();
}

// аналог
function inherit(child, parent) {
  child.prototype = Object.create(parent.prototype);
  
  сhild.prototype.constructor = сhild; // фикс строчки внизу, тк перетирает конструктор
  child.prototype.parent = parent; // кеширует родительский конструктор/ прото
}
