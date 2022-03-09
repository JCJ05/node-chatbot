const express = require('express');
const app = express();
const ngrok = require('ngrok');
const hbs = require('hbs');
require('dotenv').config({path:'./port.env'});

const port = process.env.PORT;
const routes = require('./routes/rutas');

//Configurar el trabajo con vistas html
app.set('view engine', 'hbs');

//Configurar el trabajo de los partials
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Configurar los archivos estaticos
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Configurar el router
app.use('/' , routes);

//Escuchar el puerto 
app.listen(port);

(async function () {
    const url = await ngrok.connect(port);
    console.log(url);
})();

