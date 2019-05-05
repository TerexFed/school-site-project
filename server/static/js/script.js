window.onload = function () {
  (function () {
    var date = new Date();
    var div = document.getElementById('date');
    div.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + " "
      + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getUTCFullYear();
    window.setTimeout(arguments.callee, 1);
  })();
};

function sentPhraze() {

  var phrazeInput = document.getElementById("phraze-input").value;

  var addDailyPhraze = new XMLHttpRequest();

  addDailyPhraze.open('POST', 'http://localhost:3000/add?phraze=' + phrazeInput, true);

  addDailyPhraze.addEventListener('readystatechange', function () {

    if ((addDailyPhraze.readyState == 4) && (addDailyPhraze.status == 200)) {
      console.log(addDailyPhraze);
      console.log(addDailyPhraze.responseText);
      var phraze = document.getElementById('day-phraze');
      phraze.innerHTML = addDailyPhraze.responseText;
    }

  });

  addDailyPhraze.send();
}

// 2. Создание переменной request
var request = new XMLHttpRequest();
// 3. Настройка запроса
request.open('GET', 'http://localhost:3000/get', true);
// 4. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
request.addEventListener('readystatechange', function () {
  // если состояния запроса 4 и статус запроса 200 (OK)
  if ((request.readyState == 4) && (request.status == 200)) {
    // например, выведем объект XHR в консоль браузера
    console.log(request);
    // и ответ (текст), пришедший с сервера в окне alert
    console.log(request.responseText);
    // получить элемент c id = welcome
    var phraze = document.getElementById('day-phraze');
    // заменить содержимое элемента ответом, пришедшим с сервера
    phraze.innerHTML = request.responseText;
  }
});
// 5. Отправка запроса на сервер
request.send();