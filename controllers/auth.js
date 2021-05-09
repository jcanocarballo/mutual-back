const {response} = require('express');

const loginUsuario = (req, res = response ) => {

  const { email, password } = req.body;
  
  return res.json({
    ok: true,
    msg: 'login'
  });
}

const crearUsuario = (req, res = response ) => {
  
  const { name, email, password } = req.body;

  return res.status(201).json({
    ok: true,
    msg: 'register'
  });
}

const renewToken = (req, res = response ) => {
  const { token } = req.body;
  return res.json({
    ok: true,
    msg: 'renew'
  });
}

module.exports = {
  crearUsuario,
  loginUsuario,
  renewToken
}