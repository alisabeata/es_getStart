// Работа с сетью

// ajax
const loadBtn = document.querySelector('#btn-loading');
const loadContent = document.querySelector('.content');


// - xhr
loadBtn.addEventListener('click', () => {
  // новый запрос
  const xhr = new XMLHttpRequest();
  
  // настройка запроса
  xhr.open('GET', 'https://someaddress.com/cities.json');
  // отправить
  xhr.send();
  
  xhr.addEventListener('load', () => {
    const content = JSON.parse(xhr.response);
    loadContent.textContent = xhr.response;
    
    console.log('ответ получен');
    console.log(xhr.response);
    console.log(content);
  });
});

// если третьим параметром в xhr.open('GET', '...', false); передать false, 
// то xhr.send() будет блокирующим, те интерпритатор остановится до получения
// ответа, xhr.addEventListener('load') не нужен в таком случае (отмена 
// асинхронности, so bad), по умолчанию true


// св-во xhr.responseType указывает тип ответа
xhr.responseType = 'json';


// - with Promise
function loadFile(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('load', () => {
      resolve(xhr.response);
    });
  });
  
}

loadBtn.addEventListener('click', () => {
  loadFile('https://someaddress.com/cities.json')
    .then((value) => {
      const content = JSON.parse(value);

      loadContent.textContent = value;
      console.log(value);

      return loadFile('file2.txt');
    })
    .then((value) => {
      console.log(value);
    });
});


// - проверка ошибок
xhr.addEventListener('load', () => {
  if (xhr.status >= 400) {
    throw new Error('произошла ошибка');
  }
});
