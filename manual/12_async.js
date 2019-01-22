// ассинхронность

console.log('перед setTimeout');
setTimeout(() => {
  console.log('внутри setTimeout');
});
console.log('после setTimeout');

// перед setTimeout
// после setTimeout
// внутри setTimeout




// - подгрузка картинок
const img_1 = document.createElement('img');
img_1.height = 200;
img_1.src = 'http://s3.favim.com/mini/140529/blue-colours-galaxy-pink-Favim.com-1799653.jpg';
document.body.appendChild(img_1);

img_1.addEventListener('load', () => {
  console.log('img_1 загружена');
  // можно загружать вторую
});



// загрузка картинок, функция
function loadImg(url, callback) {
  const img = document.createElement('img');
  
  img.height = 200;
  img.src = 'http://s3.favim.com/mini/140529/blue-colours-galaxy-pink-Favim.com-1799653.jpg';
  document.body.appendChild(img);
  
  img.addEventListener('load', () => {
    if (callback) {
      callback();
    }
  });
}

loadImg(url, loadImg);
