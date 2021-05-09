/**
 * Rutas de Usuarios /auth
 * host + /api/auth
 */

const express = require('express');
const router = express.Router();

const {crearUsuario, login, renew} = require('../controllers/auth');

router.post('/', login);

router.post('/register', crearUsuario);

router.get('/renew', renew);

module.exports = router;