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
const http = require('http');
console.log(http);