'use strict'

var mongoose = require('mongoose');

//os caracteristicas del host cliente
var os = require("os");
var hostname = os.hostname();

//importar fichero de la aplicaciion
var app = require('./app');
var port = 3000;

mongoose.set('useFindAndModify', false)
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api-rest', {useNewUrlParser: true, useUnifiedTopology: true}  )
    .then(()=>{

        console.log('Conexion a la base de datos exitosa!');
        
        

        //Crear servidor y escuchar peticiones http
        app.listen(port, () =>{
            console.log('Servidor corriendo en http://localhost:'+port);
            console.log('Hola '+hostname);
        })
        
})