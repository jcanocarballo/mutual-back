const express = require('express');
require('dotenv').config();

//Crear el servidor de express
const app = express();

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