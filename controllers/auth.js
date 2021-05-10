const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const loginUsuario = async (req, res = response ) => {

  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    
    if ( !usuario ) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario y/o contraseña no validos'
      });
    }
  
    // Confirmar los passwords
    
    const validPassword = bcrypt.compareSync( password, usuario.password );
    
    // Generar JWT
    const token = await generarJWT( usuario.id, usuario.name, usuario.email );
    
    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario y/o contraseña no validos'
      });
    }
    
    return res.status(200).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      email: usuario.email,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    });
  }

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

    // Generar JWT
    const token = await generarJWT( usuario.id, usuario.name, usuario.email );
  
    return res.status(201).json({
      ok: true,
      msg: 'Usuario creado con exito.',
      uid: usuario._id,
      name: usuario.name,
      email: usuario.email,
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador.'
    })  
  }
}

const renewToken = async (req, res = response ) => {
  const { uid, name, email } = req;

  // Generar JWT
  const token = await generarJWT( uid, name, email );
  
  return res.json({
      ok: true,
      token
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  renewToken
}