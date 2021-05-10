const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

//Directorio publico
app.use( express.static('public') );

//Lectura y paraseo del body
app.use(express.json());

//Rutas
//TODO: auth -> crear, login, renew
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: -> Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutandose en en el puerto: ${process.env.PORT}`);
})