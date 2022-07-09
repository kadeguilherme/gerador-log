const logger = require('../log');

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.get('/', function (req, res, next) {
   
    res.sendFile('C:/Users/Guilherme/Documents/workspace/gerador-log/public/index.html');
    
});

app.get('/style.css', function (req, res, next) {
    res.sendFile('C:/Users/Guilherme/Documents/workspace/gerador-log/public/style.css');
});


app.post('/', async (req, res, next)=> {
   
    if(req.body.options == 1){
        logger.info(req.body.nome);
        }else if (req.body.options == 2){
            logger.error(req.body.nome);
        }else if (req.body.options == 3){
            logger.debug(req.body.nome);
        }else if (req.body.options == 4){
            logger.warn(req.body.nome);
        }
    res.sendFile('C:/Users/Guilherme/Documents/workspace/gerador-log/public/index.html');
})


module.exports = app;