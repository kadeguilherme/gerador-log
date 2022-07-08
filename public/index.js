const express = require('express');

const app = express();
const router = express.Router();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM().window.document;


valorInput ="ss" ;
/*
function capturar () {

   global.document.getElementById('ControlInput')
//   valorInput = body.nome;
    console.log(valorInput);
    return valorInput;
}

module.exports = capturar;
*/
function capturar () {

    router.post('/', function(req, res){
        req.body.nome,
        console.log(req.body)
        return valorInput;
    
    
    })
    
    }
