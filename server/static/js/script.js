function getDailyPhraze() {

  var getDailyPhrazeReq = new XMLHttpRequest();

  getDailyPhrazeReq.open('GET', 'http://localhost:3000/get', true);
  getDailyPhrazeReq.addEventListener('readystatechange', function () {
    if ((getDailyPhrazeReq.readyState == 4) && (getDailyPhrazeReq.status == 200)) {
      console.log(getDailyPhrazeReq);
      var phraze = document.getElementById('day-phraze');
      phraze.innerHTML = getDailyPhrazeReq.responseText;
    }
  });
  getDailyPhrazeReq.send();
}

function updateCounter() {

  var counterUpdateReq = new XMLHttpRequest();
  var counter = document.getElementById("counter")

  counterUpdateReq.open('GET', 'http://localhost:3000/phrazeCounter', true);
  counterUpdateReq.addEventListener('readystatechange', function () {
    if ((counterUpdateReq.readyState == 4) && (counterUpdateReq.status == 200)) {
      console.log(counterUpdateReq);
      counter.innerHTML = counterUpdateReq.responseText;
    }
  });
  counterUpdateReq.send();
}

function sentPhraze() {

  var phrazeInput = document.getElementById("phraze-input").value;
  var addDailyPhrazeReq = new XMLHttpRequest();

  addDailyPhrazeReq.open('POST', 'http://localhost:3000/add?phraze=' + phrazeInput, true);
  addDailyPhrazeReq.addEventListener('readystatechange', function () {

    if ((addDailyPhrazeReq.readyState == 4) && (addDailyPhrazeReq.status == 200)) {
      console.log(addDailyPhrazeReq);
    }

  });
  addDailyPhrazeReq.send();
  phrazeInput.innerHTML = "Введите фразу дня";
  document.location.reload(true);
}

window.onload = function () {
  (function () {
    var date = new Date();
    var div = document.getElementById('date');
    div.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + " "
      + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getUTCFullYear();
    window.setTimeout(arguments.callee, 1);
  })();
};

getDailyPhraze();
updateCounter();
