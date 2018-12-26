// замыкания (CLOSURE)

// замыкания — это функция и её облаcть видимости

const a = 1;

function fn(b, c) {
  function fn2(d) {
    return a + b + c + d;
  }
  
  return fn2(1000);
}

fn(10, 100);


// если нужно добавить переменную в глобальную область видимости из локальной, то нужно исп window.somename = '';
// в случае с node js global.somename = ''
