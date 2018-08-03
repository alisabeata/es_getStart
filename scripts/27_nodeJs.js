// NodeJs

// основан на V8 

// для сервера не важно на каком языке пришется код, блягодаря V8 он транслируется в машинный (ассемблер)

// работает преимущественно на сервере, так же может использоваться для разработки десктопных приложений при подключении сторонних библиотек (Nw.js, AppJs, Electron) и даже для прогрммирования микроконтроллеров

// в основе nodeJs лежит асинхронное событийно-ориентированное программирование

// ассинхроный, но однопоточный




// Модули NodeJs:

// - HTTPS
// - FS


// - HTTPS
//const http = require('http');
//console.log(http);



// NodeJs сервер


const http = require('http');      // импорт http модуля
const fs = require('fs');          // взаимодействует с файловой системой
const Events = require('events');  // 
const eventEmmiter = new Events();

/*
http.createServer(function (request, response) {
  response.end('hello');
}).listen(3000);
*/

eventEmmiter.on('fileReaded', () => {
  console.log('EVENTEMMITER : "FILE READED"');
});

eventEmmiter.on('sendPage', (url, response) => {
  let fileName;
  
  switch (url) {
    case ('/'):
      fileName = 'node-test_index.html';
      break;
      
    case ('/contacts'):
      fileName = 'node-test_contacts.html';
      break;
      
    default:
      fileName = 'node-test_index.html';
      break;
  }
  
  fs.readFile(fileName, function (err, data) {
    eventEmmiter.emit('fileReaded');
    if (err) throw new Error('error');
    response.end(data);
  });
});


http.createServer(function (request, response) {
  // emit аналог dispatchEvent
  // здесь создаётся пользовательское событие 'sendPage'
  let fileName = eventEmmiter.emit('sendPage', request.url, response);
}).listen(3000);


// демон для node https://nodemon.io/ автоматически обновляет сервер при обновлении

// часто в разработке используется фреймворк Koa https://koajs.com/
