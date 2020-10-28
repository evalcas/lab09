const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');


//console.log('Hola mundo');

// usuario : userValencia
//password : fZJ3HrzFqDSuvZwo
// string coneccion: mongodb+srv://userValencia:<password>@cluster0.kfaje.mongodb.net/test


//CODIGO PARA DESPLEGAR EL SERVIDOR
const server = express();

// configurando cors

server.use(cors());


//PRIMERA PETICION GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicios REST'
    });
});

// CONEXION A ALA BASE DE DATOS
dbconection();

//console.log(process.env);


//DESPLIEGUE DEL SERVIDOR
server.listen(process.env.PORT, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + process.env.PORT),
        console.log('Edwin Valencia Castillo')



});