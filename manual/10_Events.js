// DOM Events

// две фазы -- event, capture (захват), срабатывание обработчиков, bubble (всплытие), default action


let link = document.querySelector('#link');

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click link');
});

const clickHendler = (event) => {
  event.preventDefault();
  console.log('click link2');
};

link.addEventListener('click', clickHendler);
link.removeEventListener('click', clickHendler);

//button = {
//  events: {
//    click: [
//      function () {...},
//      function () {...},
//      function () {...},
//      function () {...},
//    ]
//  }
//}

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('id: ' + event.target.id);
  console.log(event);
});

document.body.addEventListener('click', (event) => {
  console.log(event.target.id);
  console.log(event);
});




// Создание событий
const btnCl = document.querySelector('.btn');
const elemCl = document.querySelector('.div-click');

btnCl.addEventListener('click', () => {
  const customEvent = new CustomEvent('myEvent');
  
  elemCl.dispatchEvent(customEvent);
});


elemCl.addEventListener('myEvent', () => {
  console.log('на диве произошло событие myEvent');
});



// делегирование событий
const list = document.querySelector('.my-list');
const btnAddElem = document.querySelector('.btn-create');

let counterLi = 1;


btnAddElem.addEventListener('click', () => {
  const li = document.createElement('li');
  
  li.textContent = 'new item ' + counterLi++;
  
  list.appendChild(li);
});


list.addEventListener('click', () => {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});




// keyboard events

const inp = document.querySelector('#input-elem');

const eventTypeHandler = (event) => {
  console.log(event.type);
};

inp.addEventListener('keydown', eventTypeHandler);
inp.addEventListener('keyup', eventTypeHandler);
inp.addEventListener('keypress', eventTypeHandler);

inp.addEventListener('input', eventTypeHandler);



// document loading

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM дерево готово к работе');
});

// window.onload
window.onload = () => console.log('load');

// load
window.addEventListener('load', () => {
  console.log('страница загружена');
});