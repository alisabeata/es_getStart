// DOM Events

// две фазы — event, capture (захват), срабатывание обработчиков, bubble (всплытие), default action


const clickHendler = event => event.preventDefault();

link.addEventListener('click', clickHendler);
link.removeEventListener('click', clickHendler);


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
                   
                   
// ссылка на объект при клике
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
const eventTypeHandler = event => console.log(event.type);

inp.addEventListener('keydown', eventTypeHandler);
inp.addEventListener('keyup', eventTypeHandler);
inp.addEventListener('keypress', eventTypeHandler);

inp.addEventListener('input', eventTypeHandler);



// - document loading

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
window.addEventListener('online', () => {...});
// когда отвалился инет
window.addEventListener('offline', () => {...});
