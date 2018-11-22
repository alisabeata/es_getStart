// BOM - Browser Object Model

// - window
// - screen
// - location
// - history
// - cookie
// - таймеры
// - диалоги



// window
// window.open(), .close(), .documentWrite();

const btnNewWindow = document.querySelector('#btn-new-window');

btnNewWindow.addEventListener('click', () => {
  const newWindow = window.open('', '', 'height=500,width=500,top=50,left=50');
  const newDiv = newWindow.document.createElement('div');
  
  newDiv.textContent = 'hello';
  newWindow.document.body.appendChild(newDiv);
  
  // postMessage общение между окнами и фреймами
  newWindow.postMessage('text from postMessage', '*');
  
  newWindow.addEventListener('message', (event) => {
    console.log(event.data);
  });
});



// screen
console.log(screen);



// location
console.log(location);

// по умолчанию у сайтов порт с https порт :443, для http :80


// дана строка с url: somedomain.com/directory.html?param=11212&param2=sometext

location.search   // >>>>   ?param=11212&param2=sometext
location.search.slice(1) // >>>> param=11212&param2=sometext

const parts = location.search.slice(1).split('&') // >>>> ['param=11212', 'param2=sometext']

parts.reduce((prev, cur) => {
  const [name, value] = cur.split('=');
  prev[name] = value;
  return prev;
}); // >>>> {param: '11212', param2: 'sometext'}


// переадресация, добавляет новый элемент в историю посещений (доп элемент в history)
location.assign('url');

// переадресация, перезаписывает текущий адрес/элемент в history
location.replace('url');



// history
console.log(history);

// .back(), .forward(), .go(amount)


// navigator
console.log(navigator);

// userAgent, language

// парсер для userAgent
// https://github.com/faisalman/ua-parser-js 


// когда появл инет
window.addEventListener('online', () => {...});
// когда отвалился инет
window.addEventListener('offline', () => {...});



// cookie

// для записи
document.cookie = 'somename=somevalue';

// для чтения
document.cookie; // разделитель в результ строке >>> "; пробел"

document.cookie.split('; '); // преобразование в массив

// у каждой куки есть св-ва
// name, value, domain, path, expires

//document.cookie = 'somename=somevalue; path=/; expires=';


const date_future = new Date;
date_future.setDate(date_future.getDate() + 1);
date_future.toUTCString();

document.cookie = 'somename=somevalue; path=/; expires=' + date_future;

// создание cookie

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

// если в списке кук стоит галочка в http, то такая кука доступна только для сервера, недоступна для js для записи и для чтения

// нужно сохранить объект в куку, то нужно применить JSON.stringify();

// document.cookie='a=' + JSON.stringify({a:10});


// удаление 
// чтобы удалить куку, нужно в expires поставить прошедшую дату

// удаление cookie
function deleteCookie(name) {
  document.cookie = name + '=; expires=' + new Date(0).toUTCString();
}



// таймеры
// SetTimeout, SetInterval

// диалоги
// alert(), prompt(), confirm()
