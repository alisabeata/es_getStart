// fetch
// аналог new XMLHttpRequest()


const loadBtn_1 = document.querySelector('#btn-loading');
const loadContent_1 = document.querySelector('.content');

/* (without fetch)
function loadFile_1(url) {
  
  return new Promise((resolve, reject) => {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status === 404) {
        reject();
      } else {
        resolve(xhr.response);
      }
    });
  });
  
}
*/


// аналог функции выше с fetch
function loadFile_1(url) {
  
  return fetch(url).then(response => {
    console.log(response);
    return response.text(); // метод .text() возвращает промис
  });
  
}


loadBtn_1.addEventListener('click', () => {
  loadFile_1('file1.txt')
    .then((value) => {
      loadContent_1.textContent = value;
      console.log(value);

      return loadFile_1('file2.txt');
    })
    .then((value) => {
      loadContent_1.textContent += value;
    })
    .then((value) => {
      console.log(value);
    });
});



// - получение

fetch('file1.txt')
  .then(response => {
    return response.text(); // тк здесь вернётся промис, то след then не разрешится, пока не выполнится текущий промис
  })
  .then(text => {
    console.log(text);
  });

// короткая версия
fetch('file1.txt')
  .then(response => response.text())
  .then(text => console.log(text));



// - reject
fetch('file32.txt')
  .then(response => {
    if (response.status === 404) {
      //throw new Error('file not found');  // reject первый способ
      return Promise.reject();  // второй способ, возвращает вспомогательный промис в состоянии reject
    }
    
    return response.text();
  })
  .then(text => console.log(text))
  .catch(() => console.log('файл не найден'));


// - отправка
fetch('some.php', {
  metod: 'POST',
  body: data
});


// - json
fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
  .then(response => response.json())
  .then(cities => console.log(cities))
  .catch(() => console.log('файл не найден или это не json'));
