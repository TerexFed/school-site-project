var express = require('express');
var app = express();

var phraze = ["Hello User"];

var addedPhrazeCounter = 0;

app.use(express.static(__dirname + "/static"));

app.post('/add', function (req, res) {
    addedPhrazeCounter++;
    phraze.push(req.query.phraze);
    res.send("OK")
});

app.get('/get', function (req, res) {
    if (phraze.length === 0) {
        res.send("Фразы дня кончились, добавьте что нибудь пожалуйста!")
    } else {
        res.send(phraze.shift());
    }
});

app.get('/phrazeCounter', function (req, res) {
    res.send(addedPhrazeCounter.toString()); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
