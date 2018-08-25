const express = require('express');
const app = express();
const port = 3000;
const stoicapi = require("stoic-api");

console.log(stoicapi);

app.engine('.ejs', require('ejs').__express);
app.set('views', __dirname + '/client');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { quote: stoicapi.random() });
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});