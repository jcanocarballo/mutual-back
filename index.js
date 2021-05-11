const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

//Directorio publico
app.use( express.static('public') );

//Lectura y paraseo del body
app.use(express.json());

//Rutas
app.use('/login', express.static('public'));
app.use('/auth/login', express.static('public'));
//TODO: auth -> crear, login, renew
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: -> Eventos
app.use('/api/events', require('./routes/events'));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutandose en en el puerto: ${process.env.PORT}`);
})