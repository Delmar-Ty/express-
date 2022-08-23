const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('Port opened on port number 4000');
});

app.get('/', (req, res) => {
    res.render('index');
});