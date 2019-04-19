// DOM Events

// две фазы — event, capture (захват), срабатывание обработчиков, bubble (всплытие), default action


const clickHendler = event => event.preventDefault();

link.addEventListener('click', clickHendler);
link.removeEventListener('click', clickHendler);


// схема обработки событий
button = {
  events: {
    click: [
      function () {...},
      function () {...},
      function () {...},
      function () {...},
    ]
  }
}

                  
// (!) ссылка на объект при клике
link.addEventListener('click', console.log(event.target));



// - создание событий
btn.addEventListener('click', () => {
  const customEvent = new CustomEvent('myEvent');
  elem.dispatchEvent(customEvent);
});

elem.addEventListener('myEvent', () => {
  console.log('на диве произошло событие myEvent');
});


// - делегирование событий
btn.addEventListener('click', () => {
  const li = document.createElement('li');
  
  li.textContent = 'new item ' + counter++;
  list.appendChild(li);
});


list.addEventListener('click', () => {
  if (event.target.tagName === 'LI') { // << 
    console.log(event.target.textContent);
  }
});



// - keyboard events
keydown    // при нажати клавиши
keyup      // когда клавиша отпущена
keypress   // когда нажата и отпущена

const eventTypeHandler = event => console.log(event.type);

inp.addEventListener('keydown', () => {});
inp.addEventListener('keyup', () => {});
inp.addEventListener('keypress', () => {});
                 
                   
// - mouse events
click         // при клике на элемент левой кнопкой мыши
contextmenu   // при клике правой кнопкой мыши
mouseover     // при наведении курсора
mousedown     // нажатие
mouseup       // кнопка отпущена
mousemove     // движение курсора
mouseout      // курсор выведен за пределы элемента


// - события форм
submit        // при отправке формы
focus         // при фокусе на элементе
change        // при изменении в элементе формы
input         // при наборе текста

inp.addEventListener('input', () => {});
                   

// - document loading
DOMContentLoaded  // DOM дерево готово к работе
load              // страница загружена полностью

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM дерево готово к работе');
});
                   
// load
window.addEventListener('load', () => {
  console.log('страница загружена полностью');
});

// window.onload
window.onload = () => console.log('load');
                   
                   
// - состояние подключения
// когда появл инет
window.addEventListener('online', () => {});
// когда отвалился инет
window.addEventListener('offline', () => {});

                                          
// - События CSS
transitionend     // когда CSS-анимация завершена
element.addEventListener('transitionend', () => {});
                   
                   
// - события ошибок
// обработка ошибки в синхронном коде
window.onerror = function () {};
// обработка ошибки в промисе
window.addEventListener('unhandledrejection', () => {});
                   