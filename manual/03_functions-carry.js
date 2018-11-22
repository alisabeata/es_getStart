// каррирование

// каррирование применяется, когда много логически много функций, чтобы их не дублиирвать

function filter(arr, someFn) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (someFn(arr[i]) === true) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

const arr = [1, 5, 7, 7, 11, 13, 53, 72, 10];



// carry here
function greater(than) {
  return function(number) {
    return number > than;
  }
}



//const result = filter(arr, function (number) {
//  return number > 5;
//});

const result = filter(arr, greater(5));

console.log(result);