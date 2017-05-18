var express = require('express');
var app = express();
var middleware = require('./middleware');

var port = 4444;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit', function (req, res) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    middleware.insert(firstName, lastName);
    res.redirect('/show');
});

app.get('/show', function (req, res) {
    middleware.retrive().then(function (data) {
        res.send(data)
    }).catch(err => {done(err)}
    )
});

app.listen(port);
console.log("Listening on port", port);  