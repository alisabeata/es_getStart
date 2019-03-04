// DOM
// Document Object Model



// - размеры элементов
window.innerWidth                     // вся ширина окна
document.documentElement.clientWidth  // ширина минус прокрутка

offsetParent              // родитель по дереву рендеринга
offsetLeft/offsetTop      // позиция левого верхнего угла блока отн offsetParent
offsetWidth/offsetHeight  // ширина/высота с пэддингами (рамками)
clientLeft/clientTop      // отступ области содержимого от левого-верхнего угла элемента
clientWidth/clientHeight  // ширина/высота с пэддингами без скролла
scrollWidth/scrollHeight  // ширина/высота с пэддингами, включая прокручиваемую область, не включает полосы прокрутки
scrollLeft/scrollTop      // ширина/высота прокрученной части документа от верхнего левого угла

// (!) все свойства, доступны только для чтения, кроме scrollLeft/scrollTop


// - прокрутка
// Большинство браузеров корректно обработает запрос к scrollLeft/Top
documentElement.scrollLeft
documentElement.scrollTop
// но в Safari/Chrome/Opera есть ошибки, из-за которых следует использовать document.body
document.body.scrollLeft
document.body.scrollTop

// можно также исп
window.pageYOffset
window.pageXOffset

// изменение положения прокрутки
scrollBy(x,y)            // прокручивает страницу относительно текущих координат
scrollTo(pageX,pageY)    // прокручивает страницу к указанным координатам относительно документа
elem.scrollIntoView(top) // вызывается на элементе и прокручивает страницу так, чтобы элемент оказался вверху, если параметр top равен true, и внизу, если top равен false

// - координаты
clientX, clientY       // начало координат относительно окна
pageX, pageY           // начало координат относительно документа


// получение координат
function getCoords(elem) {
  const block = elem.getBoundingClientRect();
 
  return {
    top: block.top + window.pageYOffset,
    left: block.left + window.pageXOffset
  };
}




// - навигация

// - getElementById
const container1 = document.getElementById('container');
// условие на наличие элемента
if (container1) {  // if (container != null)
  console.log('элемент container есть на странице');
}

// - getElementsByClassName
const elements = document.getElementsByClassName('c1');
// условие на наличие элемента
if (elements.length > 0) {
  console.log('элементы elements есть на странице');
}

// (!) querySelectorAll если не нужно динамическое обновление коллекций, тк у getElement она присутсвует


// - querySelector
// - querySelectorAll
const contain = document.querySelector('#container');
const elems = [].slice.call(document.querySelectorAll('.c1'));

// - childNodes
const container = document.querySelector('#container');
const containerInnerChilds = container.childNodes;

// - nodeType
for (let i = 0; i < containerInnerChilds.length; i++) {
  if (containerInnerChilds[i].nodeType == 1) {
    console.log('это элемент');
  }
  
  if (containerInnerChilds[i].nodeType == 3) {
    console.log('это текст');
  }
}

// - children 
// возвращает только элементы
const containerInnerElems = container.children;

// - firstChild
container.firstChild         // #text
container.firstElementChild  // <div class="c1"></div>

// - lastChild
container.lastChild          // #text
container.lastElementChild   // <div class="c2"></div>

// - siblings
const elemC1Middle = document.querySelectorAll('.c1')[1];

elemC1Middle.previousSibling         // #text
elemC1Middle.previousElementSibling  // <div class="c1"></div>
elemC1Middle.nextSibling             // #text
elemC1Middle.nextElementSibling      // <div class="c2"></div>

// - parent
elemC1Middle.parentElement   // <div id="container"></div>


// - body
const body = document.body;



// - создание / удаление

// - createElement
// - appendChild
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
newDiv.textContent = 'hello!';

// - removeChild
document.body.removeChild(newDiv);


// - insertBefore
// относительно чего (container), что (newDiv), перед чем (elemC1Middle)
document.querySelector('#container').insertBefore(newDiv, elemC1Middle);


// - innerHTML
// - outerHTML
// - tagName
console.log(container.innerHTML);
console.log(container.outerHTML);
console.log(container.tagName); // "DIV"

// - setAttribute
container.setAttribute('attr1', 'value1');
container.setAttribute('attr2', 'value2');

// - removeAttribute
container.removeAttribute('attr2');


// - removeChild
// - remove
// относительно родителя
container.removeChild(elemC1Middle);

// (!) в более новых браузерах работает elemC1Middle.remove()
elemC1Middle.remove();




