// Паттерны


// MVC (Model, View, Controller)

// Model - бизнес-логика приложения
// View - визуальное представляение модели
// Controller - прослойка между моделью и представлением, осуществляет взаимодействие между ними


// Пользователь просит браузер открыть страницу, браузер посылает запрос на сервер, сервер отдаёт данные в виде html-разметки, браузер превращает разметку в визуальное дом-дерево

// Model - сервер
// View - dom-дерево
// Controller - веб-браузер

// M — доступ к данным, управление данными
// V — предоставление данных, внешний вид
// C — работа с сетью, работа с ассинхронными операциями, локалсторадж


// получение данных
const Model = {
  login() {
//    return new Promise((resolve, reject) => {
//      SERVICE.init({...});
//      SERVICE.auth.login((response) => {
//        resolve(response);
//      });
//    }
    
  },
  callApi() {
    // ...
  },
  getUser() {
    // ...
  }
};


// отображение данных
const View = {
  render(templateName, model) {
    // добавление элемента на страницу
  }
};

//const html = View.render('friend', [{name: 'Name', lastName: 'lastName'}]);



// прослойка между Model и View
const Controller = {
  someRoute() {
    return Model.getUser().then(() => {
      elemOuter.innerHTML = View.render('friend', [{name: 'Name', lastName: 'lastName'}]);
    });
  }
};

// <button onlick="Controller.someRoute()">load some content</button>



// для анимаций или отправки данных при переключ вкладок (например) лучше добавить обёртку Router и вызывать контроллер из него

// <button onlick="Router.handle('some')">load some content</button>

const Router = {
  handle(route) {
    const routeName = route + 'Route';
    
    Controller[routeName]();
  }
};


// MVP

// Presenter - похож на контроллер в том плане, что именно через него происходит взаимодействие между моделью и представлением. Разница в том, что в MVP, между видом и presenter - двусторонняя связь. Как было сказано выше - в MVC между видом и контроллером - односторонняя связь.


// MVVM (Model-View-ViewModel)

// ViewModel - это усовершенствованный presenter. Он имеет ту же схему работы, что и MVP - позволяет осуществить двусторонний обмен между с view. Но, плюс ко всему, позволяет реализовать data-binding.
