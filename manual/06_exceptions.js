// Исключения

/*
try {
  // потенциально "опасный" код (который может поломать алгоритм)
} catch (e) {
  // обработка
}
*/

const ERROR_DIV_ZERO = 'На ноль делить нельзя';
const ERROR_SHOULD_B = 'Необходимо передать b';

// #1
function divNums(a, b) {
  try {
    if (b === 0) {
      throw new Error(ERROR_DIV_ZERO);
    }
    
    if (b === undefined) {
      throw new Error(ERROR_SHOULD_B);
    }
  } catch (e) {
    console.error(e.message);
  }
  
  return a / b;
}
 
const resultDivNums = divNums(14, 0);



//#2 (более правильный вариант)
function divNums(a, b) {
  if (b === 0) {
    throw new Error('На ноль делить нельзя');
  }

  if (b === undefined) {
    throw new Error('Необходимо передать b');
  }
  
  return a / b;
}


try {
  console.log(divNums(14, 0));
} catch (e) {
  console.error(e.message);
}


