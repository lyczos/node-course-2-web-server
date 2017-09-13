const express = require('express');
const hbs = require('hbs');

var app = express();


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('Hello boss!');
    res.send({
        name: 'Michal',
        likes: ['bikes', 'it']
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        current_year: new Date().getFullYear(),
    });
});

app.get('/bad', (req, res) => {
    // res.send('Hello boss!');
    res.send({
        errorMessage: 'Bad request'
    })
});


app.listen(3000);