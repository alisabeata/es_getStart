// ajax

const loadBtn = document.querySelector('#btn-loading');
const loadContent = document.querySelector('.content');


// xhr
loadBtn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest(); // новый реквест
  
  xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
  xhr.send(); // отправить запрос
  
  xhr.addEventListener('load', () => {
    console.log('ответ получен');
    console.log(xhr.response);
    
    loadContent.textContent = xhr.response;
    
    const content = JSON.parse(xhr.response);
    
    console.log(content);
  });
});

// если третьим параметром в xhr.open('GET', '...', false); передать false, то  xhr.send() будет блокирующим, те интерпритатор остановится до получения ответа, xhr.addEventListener('load') не нужен в таком случае (отмена асинхронности, so bad), по умолчанию true

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
  loadFile('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
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