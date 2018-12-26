// ООП
// - инкапсуляция
// - наследование
// - полиморфизм

// инкапсуляция — возможность скрывать более сложную реализацию за более простыми вещами
// addEventListener пример инкапсуляции

const clickBtn_1 = document.querySelector('#click-btn-1');

clickBtn_1.addEventListener('click', () => {
  console.log(1);
});

clickBtn_1.addEventListener('click', () => {
  console.log(2);
});

clickBtn_1.addEventListener('mousemove', () => {
  console.log('!');
});


// примерная схема обработки событий на основе addEventListener

/*
clickBtn_1 = {
  eventHandler: {
    click: [
      () => {
        console.log(1);
      },
      () => {
        console.log(2);
      }
    ],
    mousemove: [
      () => {
        console.log('!');
      }
    ]
  },
  dispatchEvent(event) {
    if (this.eventHandler.hasOwnProperty(event.type)) {
      this.eventHandler.forEach(handler => {
        handler(event);
      });
    }
  }
};
*/


// паттерн модуль (инкапсуляция) — сокрытие данный, защита от изменений
function Counter() {
  let counter = 0;
  
  return {
    inc() {
      counter++;
    },
    get() {
      return counter;
    }
  }
}

const counter_1 = Counter();

counter_1.inc();
counter_1.inc();
counter_1.inc();

console.log(counter_1.get());



// наследование — любой объект может унаследовать что-то, что имеет другой объект

// например EventTarget (имеет .addEventListener(), .removeEventListener(), .dispatchEvent())


//xhr.addEventListener(...);
//image.addEventListener(...);
//fileReader.addEventListener(...);

// перечисленные сущности имеют addEventListener

//  паттерн интерфейс
//  множественное наследование (миксины)

// более полно подход наследования реализван в typeScript (надстройка над js)



// полиморфизм — одна сущность, много форм
// возможность работать с разными сущнистями как с одной
 
function addClickHandler(element) {
  element.addEventListener('click', () => {
    console.log('111');
  });
}

//addClickHandler(myBtn);
//addClickHandler(someElem);
//addClickHandler(...);
