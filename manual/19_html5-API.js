// HTML5 API

// - DataSet
// - History states
// - Local storage / Session storage
// - FileAPI
// - WebSockets
// - Geolocation
// - Canvas
// - AudioAPI
// - WebWorkers


// - DataSet
const dataElem = document.querySelector('.elem-with-data');

console.log('_____DataSet');

// чтение DataSet
console.log(dataElem.dataset.num);

// запись DataSet
dataElem.dataset.lastName = 'some name'; // >> data-last-name = '...'

console.log(Object.keys(dataElem.dataset));

const textContent = document.querySelector('.text-content');

document.addEventListener('keyup', function (event) {
  const rule = event.target.dataset.rule;
  
  console.log(rule);
  textContent.style[rule] = event.target.value;
});


// - History states

// для маршрутизации
const saveBtn = document.querySelector('.save-btn');
const bgColor = document.querySelector('#bgColor');
const fColor = document.querySelector('#fColor');
const fSize = document.querySelector('#fSize');

function applyStyles() {
  textContent.style.backgroundColor = bgColor.value;
  textContent.style.color = fColor.value;
  textContent.style.fontSize = fSize.value;
}

document.body.addEventListener('keyup', function () {
  applyStyles();
});

saveBtn.addEventListener('click', function () {
  const url = '/' + bgColor.value + '/' + fColor.value + '/' + fSize.value;
  
  history.pushState({
    bgColor: bgColor.value,
    fColor: fColor.value,
    fSize: fSize.value,
  }, 'new state', url);
});

window.addEventListener('popstate', function (e) {
  const state = e.state;
  
  console.log(event);
  
  bgColor.value = state.bgColor;
  fColor.value = state.fColor;
  fSize.value = state.fSize;
  
  applyStyles();
});

applyStyles();





// - Local storage / Session storage

// в отличие от кук данные не отправляются на сервер, не имеют срока годности, можно хранить больший объём данных

const storageName = document.querySelector('#storage-name');
const storageLastName = document.querySelector('#storage-last-name');
const storageText = document.querySelector('#storage-text');
const isSessionStorage = document.querySelector('#storage-session');
const storageSave = document.querySelector('#storage-save');
const storageLoad = document.querySelector('#storage-load');
let storage = localStorage;

storageSave.addEventListener('click', function () {
  storage.data = JSON.stringify({
    myName: storageName.value,
    myLastName: storageLastName.value,
    myText: storageText.value,
  });
});

storageLoad.addEventListener('click', function () {
  const data = JSON.parse(storage.data || '{}');
  
  storageName.value = data.myName || '';
  storageLastName.value = data.myLastName || '';
  storageText.value = data.myText || '';
});

isSessionStorage.addEventListener('change', function () {
  storage = isSessionStorage.checked ? sessionStorage : localStorage;
});


// информация о том, что какая-то вкладка поменяла localStorage, возникает на всех других вкладках, а не на той на которой произошла перезапись (кроме IE10-)
window.addEventListener('storage', function () {
  console.log(argument);
});




// - FileAPI

const fileReader = new FileReader();
const inpLoader = document.querySelector('#file-loader');
const imgLoader = document.querySelector('#file-img-load');

fileReader.addEventListener('load', function () {
  imgLoader.src = fileReader.result;  // result появляется у fileReader после загрузки файла
});

inpLoader.addEventListener('change', function (e) {
  const file = e.target.files[0];
  
  fileReader.readAsDataURL(file); // readAsDataURL фильтр, трансформирует файл в base 64
});

// FileAPI chunks
const fileLoader2 = document.querySelector('#file-loader-2');
const fileLoader2Progress = document.querySelector('#file-loader-2_progress');
const fileLoader2Content = document.querySelector('#file-loader-2_content');

function LoadChanks() {
  const fileReader = new FileReader();
  const chunkSize = 1024;
  let file;
  let chunkCount;
  let lastEndByte = 0;
  
  function loadNextChunk() {
    const currentChunkSize = (lastEndByte + chunkSize > file.size) ? file.size - lastEndByte : chunkSize;
    const blob = file.slice(lastEndByte, lastEndByte +  currentChunkSize);
    
    fileReader.readAsText(blob);
    
    lastEndByte += currentChunkSize;
  }
  
  fileReader.addEventListener('load', function () {
    fileLoader2Progress.textContent = 'Loaded: ' + parseInt(100 / chunkCount * lastEndByte / chunkSize) + '%';
    
    // TODO: отправка данных на сервер
    fileLoader2Content.textContent += this.result;
    
    if (lastEndByte < file.size) {
      loadNextChunk();
    }
  });
  
  fileLoader2.addEventListener('change', function (e) {
    file = e.target.files[0];
    chunkCount = (file.size < chunkSize) ? 1 : file.size / chunkSize;
    
    loadNextChunk();
  });
}

// try to load test-chunk.txt
LoadChanks();





// - WebSockets
//   - открываем соединение
//   - отправляем сообщение
//   - слушаем сообщения

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({post: 8080});

const connections = [];

wss.on('connection', function (ws) {
  console.log('new connection');
  connections.push(ws);
  
  ws.on('message', function incoming(message) {
    console.log('==============');
    console.log('new message ws: ', message);
    
    connections.forEach(function (connection) {
      console.log('sending data to client');
      
      connection.send(message, function (e) {
        if (e) {
          connections = connections.filter(function (current) {
            return current !== connection;
          });
          
          console.log('close connection');
        }
      });
    });
    
    console.log('==============');
  });
  
  ws.on('close', function () {
    connections = connections.filter(function () {
      return current !== ws;
    });
    
    console.log('close connection');
  });
});



const socket = new WebSocket("ws://localhost:8080");
const messageContainer = document.querySelector('.chat');
const messageInp = document.querySelector('.chat-inp');
const messageSend = document.querySelector('.chat-send');

function addMessage(message) {
  const messageItem = document.createElement('div');
  
  messageItem.className = 'message-item';
  messageItem.textContent = message;
  
  messageContainer.appendChild(messageItem);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendMessage() {
  const message = messageInp.value;
  
  socket.send(message);
  
  messageInp.value = '';
}

socket.addEventListener('message', function (event) {
  addMessage(event.data);
});

socket.addEventListener('error', function () {
  alert('Соединение закрыто или не может быть открыто');
});

messageSend.addEventListener('click', sendMessage);




// - Geolocation
const locationResult = document.querySelector('.location-result');
const locationDetect = document.querySelector('#location-detect');
const locationWatch = document.querySelector('#location-watch');
const locationUnwatch = document.querySelector('#location-unwatch');
let watchId;

function addLocation(geopos) {
  const locationItem = document.createElement('div');
  
  locationItem.className = 'location-result__item';
  locationItem.textContent = 'latitude: ' + geopos.coords.latitude + ', longitude: ' + geopos.coords.longitude + ', accuracy: ' + geopos.coords.accuracy;
  // чем больше accuracy, тем менее точно определено местоположение
  
  locationResult.appendChild(locationItem);
  locationResult.scrollTop = locationResult.scrollHeight -locationResult.clientHeight; 
}

locationDetect.addEventListener('click', function () {
  console.log();
  navigator.geolocation.getCurrentPosition(addLocation, function () {
    console.log('невозможно определить местоположение');
  });
});

locationWatch.addEventListener('click', function () {
  if (!watchId) {
    watchId = navigator.geolocation.watchPosition(addLocation, function () {
      console.log('невозможно определить местоположение');
    });
    
    // watchPosition возвращает уникальный id, чтобы можно было применить clearWatch в дальнейшем
  }
});

locationUnwatch.addEventListener('click', function () {
  navigator.geolocation.clearWatch(watchId);
  watchId = null;
});
