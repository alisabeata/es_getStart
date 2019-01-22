// fetch

// аналог new XMLHttpRequest()

function loadFile(url) {
  return fetch(url).then(response => {
    return response.text(); // метод .text() возвращает Promise
  });
  
}

btn.addEventListener('click', () => {
  loadFile('file1.txt')
    .then((value) => {
      loadContent.textContent = value;
      return loadFile('file2.txt'); // << loadFile
    })
    .then((value) => {
      loadContent.textContent += value;
    })
    .then((value) => {
      console.log(value);
    });
});



// - получение
fetch('file1.txt')
  // тк здесь вернётся промис, то след then не разрешится, пока не выполнится текущий промис
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
  .catch(() => console.log('файл не найден')); // >> 'файл не найден'


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
