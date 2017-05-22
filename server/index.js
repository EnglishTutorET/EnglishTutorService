var express = require('express');
var app = express();
var repository = require('./repository');

var port = 4444;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit', function (req, res) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    repository.insert(firstName, lastName);
    res.redirect('/show');
});

app.get('/show', function (req, res) {
    repository.retrive().then(function (data) {
        res.send(data)
    }).catch(err => {done(err)}
    )
});

app.listen(port);
console.log("Listening on port", port);