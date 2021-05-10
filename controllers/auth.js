const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const loginUsuario = async (req, res = response ) => {

  const { email, password } = req.body;

  return res.status(200).json({
    ok: true,
    msg: 'login'
  });
}

const crearUsuario = async (req, res = response ) => {
  
  const { email, password } = req.body;
  
  try {    
    let usuario = await Usuario.findOne({email});

    if(usuario){
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo."
      });
    }
    usuario = new Usuario(req.body);
  
    //Encryptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
  
    return res.status(201).json({
      ok: true,
      msg: 'Usuario creado con exito.',
      uid: usuario._id,
      name: usuario.name,
      email: usuario.email 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador.'
    })  
  }
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