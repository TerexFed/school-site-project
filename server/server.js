var express = require('express');
var app = express();

var phraze = ["Hello World"];

app.use(express.static(__dirname + "/static"));

app.post('/add', function (req, res) {
    phraze.push(req.query.phraze); 
});

app.get('/get', function (req, res) {
    if (phraze.length === 0) {
        res.send("Фразы дня кончились, добавьте что нибудь пожалуйста!")
    } else {
        res.send(phraze.shift());
    }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});