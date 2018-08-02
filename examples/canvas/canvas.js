const scene = document.querySelector('#scene');
const ctx = scene.getContext('2d');
const lastCoords = {};


function touchCancel(event) {
  for (let i = 0; i < event.changedTouches.length; i++) {
    let touch = event.changedTouches[i];
    
    delete lastCoords[touch.identifier];
  }
} 

document.addEventListener('touchstart', event => {
  event.preventDefault();
  
  console.log(event.changedTouches);
  
  for (let i = 0; i < event.changedTouches.length; i++) {
    let touch = event.changedTouches[i];
    
    lastCoords[touch.identifier] = {
      x: touch.pageX,
      y: touch.pageY,
    };
  }
}, {passive: false});

document.addEventListener('touchmove', event => {
  event.preventDefault();
  
  console.log(event.changedTouches);
  
  for (let i = 0; i < event.changedTouches.length; i++) {
    let touch = event.changedTouches[i];
    
    ctx.beginPath();
    ctx.moveTo(lastCoords[touch.identifier].x, lastCoords[touch.identifier].y);
    ctx.strokeStyle = '#ff00ff';
    ctx.stroke();
    
    lastCoords[touch.identifier] = {
      x: touch.pageX,
      y: touch.pageY,
    };
  }
}, {passive: false});


document.addEventListener('touchend', touchCancel, {passive: false});
document.addEventListener('touchcancel', touchCancel);

window.addEventListener('load', () => {
  scene.width = window.innerWidth;
  scene.height = window.innerHeight;
});