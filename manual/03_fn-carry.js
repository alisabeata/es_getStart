// каррирование

// частный случай замыкания
// каррирование применяется, когда много логически похожих функций, чтобы их не дублировать


const sum = (x, y) => x + y; // обычная запись
sum(x, y);

const sumCurry = x => y => x + y; // каррирование
sumCurry(x)(y);



// пример использования
const arr = [1, 5, 7, 7, 11, 13, 53, 72, 10];
// carry here
function greater(than) {
  return function(number) {
    return number > than;
  }
}

const result = filter(arr, greater(5));
// не дублируя функцию можно менять параметр, настраивая фильтр

