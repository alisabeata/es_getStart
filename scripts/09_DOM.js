// DOM - Document Object Model

// getElementById
let container1 = document.getElementById('container');

console.log(container1);

if (container1) {  // if (container != null)
  console.log('элемент container есть на странице');
}

// getElementsByClassName
let elements = document.getElementsByClassName('c1');

console.log(elements);

if (elements.length > 0) {
  console.log('элементы elements есть на странице');
}


// querySelectorAll если не нужно динамическое обновление коллекций, тк у getElement.. она присутсвует


// querySelector, querySelectorAll
let contain = document.querySelector('#container');
let elems = [].slice.call(document.querySelectorAll('.c1'));

console.log(contain);
console.log(elems);




// childNodes
let container = document.querySelector('#container');

let containerInnerChilds = container.childNodes;

console.log(containerInnerChilds);


// nodeType
for (let i = 0; i < containerInnerChilds.length; i++) {
  console.log(containerInnerChilds[i].nodeType);
  
  if (containerInnerChilds[i].nodeType == 1) {
    console.log('das ist element');
  }
  
  if (containerInnerChilds[i].nodeType == 3) {
    console.log('das ist text');
  }
}

// children возвращает только элементы
let containerInnerElems = container.children;

console.log(containerInnerElems);


// first childs
console.log(container.firstChild); // #text
console.log(container.firstElementChild); // <div class="c1"></div>

// last
console.log(container.lastChild); // #text
console.log(container.lastElementChild); // <div class="c2"></div>

// siblings
let elemC1Middle = document.querySelectorAll('.c1')[1];

console.log(elemC1Middle.previousSibling); // #text
console.log(elemC1Middle.previousElementSibling); // <div class="c1"></div>

console.log(elemC1Middle.nextSibling); // #text
console.log(elemC1Middle.nextElementSibling); // <div class="c2"></div>

// parent
console.log(elemC1Middle.parentElement);  // <div id="container"></div>


// body
const body = document.body;


// createElement, appendChild
const newDiv = document.createElement('div');

document.body.appendChild(newDiv);

newDiv.textContent = 'hello!';


// removeChild
document.body.removeChild(newDiv);


// insertBefore

// относительно чего (container), что (newDiv), перед чем (elemC1Middle)
document.querySelector('#container').insertBefore(newDiv, elemC1Middle);


// inner, outer, tagName
console.log(container.innerHTML);
console.log(container.outerHTML);
console.log(container.tagName); // "DIV"

// attrs
container.setAttribute('attr1', 'value1');
container.setAttribute('attr2', 'value2');

console.log(container.getAttribute('attr1'));

container.removeAttribute('attr2');


// remove element
// относительно родителя
// container.removeChild(elemC1Middle);

// в более новых браузерах работает elemC1Middle.remove();
