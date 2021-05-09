const {response} = require('express');

const login = (req, res = response ) => {
  return res.json({
    ok: true,
    msg: 'login'
  });
}

const crearUsuario = (req, res = response ) => {
  return res.json({
    ok: true,
    msg: 'register'
  });
}

const renew = (req, res = response ) => {
  return res.json({
    ok: true,
    msg: 'renew'
  });
}

module.exports = {
  crearUsuario,
  login,
  renew
}