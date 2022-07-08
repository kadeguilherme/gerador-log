const express = require('express');
const app = express();

var captura = require('../../public');


var bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/', function (req, res, next) {

  
    res.sendFile('C:/Users/Guilherme/Documents/workspace/gerador-log/public/index.html');
    
});

app.get('/style.css', function (req, res, next) {
    res.sendFile('C:/Users/Guilherme/Documents/workspace/gerador-log/public/style.css');
});

app.get('/index.js', function (req, res, next) {
    res.sendFile('C:/Users/Guilherme/Documents/workspace/gerador-log/public/index.js');
});


app.post('/', async (req, res, next)=> {
    console.log(req.body)
    res.json(req.body)
   
})

module.exports = app;