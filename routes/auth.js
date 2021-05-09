/**
 * Rutas de Usuarios /auth
 * host + /api/auth
 */

const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = express.Router();

const {crearUsuario, loginUsuario, renewToken} = require('../controllers/auth');

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos
  ], 
  loginUsuario);

router.post(
  '/register', 
  [
    check('name', 'El nombre es obligatorio.').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos
  ],
  crearUsuario);

router.get('/renew', renewToken);

module.exports = router;