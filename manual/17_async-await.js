// async/await


// позволяет добавлять промисы в основной поток, убирает ассинхронность, 
// но только внутри функции async, по отношению ко внешним функциям асинхронность не нарушается

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

// await ждёт завершения выполнения функции, те '__after' не выведется до окончания выполнения delay()
// await работает только, если вложен в функцию с ключ словом async

async function someFnc() {
  console.log('__before');
  await delay(2000);
  console.log('__after');
}

console.log('!__before');
someFnc();
console.log('!__after');


// обычно используется с IIFE

//  (async function () {
//    ....all code here
//    ...
//    await ....
//    ...
//  })();

//  (async () => {
//    ....all code here
//    ...
//    await ....
//    ...
//  })();


const loadBtn_2 = document.querySelector('#btn-async-loading');
const loadContent_2 = document.querySelector('.content_2');


function loadFile_2(url) {
  return fetch(url).then(response => response.text());
}

loadBtn_2.addEventListener('click', async () => {
  const content = await loadFile_2('file1.txt');
  console.log(content);
});


// аналог того что выше, без loadFile_2
loadBtn_2.addEventListener('click', async () => {
  const response = await fetch('file1.txt');
  const content = await response.text();
  console.log(content);
});


// reject c async
function loadFile_3(url) {
  return fetch(url).then(response => {
    if (response.status === 404) {
      return Promise.reject('нет такого файла');
    }
    
    return response.text();
  });
}

loadBtn_2.addEventListener('click', async () => {
  try {
    const content = await loadFile_3('file11.txt');
    console.log(content);
  } catch (e) {
    console.log(e);
  }
});
