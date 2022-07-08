const express = require('express')
const app = express();

//Rotas
const routes = require('./routes/routes');
const personRoute = require('./routes/personRoute');

app.use('/',routes)
app.use('/person',personRoute);

module.exports = app;