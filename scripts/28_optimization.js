// Оптимизация

// - минификация (uglify, csso/cssnano)


// конвеер пикселей (последовательнось рендеринга)
// - JavaScript
// - Style
// - Layout (расчет макета)
// - Paint (прорисовка)
// - Composition (компоновка)

// влияние свойств на конвеер пикселей, список https://csstriggers.com/
// полезно учитывать при создании анимаций

// ! анимацию лучше делать с исп св-ва transform/translate (а не top/left), тк анимация этих св-в производится видеокартой, а не центральным процессором




// - производительность (нужно учитывать, что не всегда следует гнаться за максимальной производительностью)

// преобразование массива: цикл for быстрее чем методы массива (map например примерно в 2 раза при запуске 10к итераций)

// добавление DOM-элементов: напрямую дольше, чем через фрагмент (в три раза при запуске 10к итераций)  https://developer.mozilla.org/ru/docs/Web/API/DocumentFragment


const fragment = document.createDocumentFragment();

const newDiv = document.createElement('div');
newDiv.textContent = 'sometext';
fragment.appendChild(newDiv);

const newDiv2 = document.createElement('div');
newDiv2.textContent = 'sometext';
fragment.appendChild(newDiv2);

// ...
document.body.appendChild(fragment);


// поиск в строке: с конкатинацией медленнее в 3 раза при запуске 10к итераций чем без




// Performance -- замер производительности (глобальный объект, API встроен в браузер) https://developer.mozilla.org/ru/docs/Web/API/Performance


/*
for (...) {
  performance.mark(NAME_START);
  // code for a test here
  performance.mark(NAME_END);
  performance.measure(NAME, NAME_START, NAME_END); // складывает замеры 
}

const measure = performance.getEntriesByName(NAME); // вывод результата замера
     
let result = 0;
     
for (const {duration} of measure) {
  result += duration;
}

performance.clearMarks();
performance.clearMeasure();

result.toFixed();
*/
