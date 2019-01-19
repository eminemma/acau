//var oracle = require('../routes/conn');
var jwt = require('jsonwebtoken');
const JWT_Secret = 'your_secret_key';
exports.Authenticate = (req, res) => {
  var testUser = { documento: 'test', password: 'test'};

  if (req.body) {
    var user = req.body;

    if (testUser.documento===req.body.documento && testUser.password === req.body.password) {
      var token = jwt.sign(user, JWT_Secret);
      res.status(200).send({
        signed_user: user,
        token: token
      });
    } else {
      res.status(403).send({
        errorMessage: 'Se requiere autorizacion'
      });
    }
  } else {
    res.status(403).send({
      errorMessage: 'Por favor ingresar email y password'
    });
  }
}

exports.GetAll = (req,res)  => {
  /*var db = oracle.conectarDB(res);
  var limite = req.params.limite;

  var filters = {};

  if (limite !== undefined) {
    filters['limit'] = limite;
  }
  return db.Usuario.findAll(filters).then(result => {
   return res.status(200).json(result);
  });*/
}

exports.GetBy = (req,res)  => {

}

exports.GetById = (req,res)  => {

}

exports.Save = (req,res)  => {

}

exports.Update = (req,res)  => {

}

exports.LockUserId = (req,res)  => {

}

exports.UnlockUserId = (req,res)  => {

}

exports.RestartPassword = (req,res)  => {

}

exports.AddRole = (req,res)  => {

}

exports.RemoveRole = (req,res)  => {

}

exports.GetRolesAdd = (req,res)  => {

}

exports.GetSystemasAdd = (req,res)  => {

}

exports.GetSystemsMulti = (req,res)  => {

}
