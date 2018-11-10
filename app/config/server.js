const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser')

//midleware
app.use(bodyParser.urlencoded({extended: true})); //capturar os dados do formulario (gera json)
app.use(bodyParser.json()); //faz a comunicação com a database - utilizada em api nodejs
app.use(express.static('./app/public')) //arquivos estáticos ficarão dentro da pasta

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign({cwd: 'app'})
    .include('routes')
    .then('config/DBConnection.js')
    .then('controllers')
    .then('models')
    .into(app)

module.exports = app;

