var oracle = require('../routes/conn');

exports.GetAll = function(req,res){
  var db = oracle.conectarDB(res);
  var limite = req.params.limite;

  var filters = {};

  if (limite !== undefined) {
    filters['limit'] = limite;
  }
  return db.Usuario.findAll(filters).then(result => {
   return res.status(200).json(result);
  });
}

exports.GetBy = function(){

}

exports.GetById = function(){

}

exports.Save = function(){

}

exports.Update = function(){

}

exports.LockUserId() = function(){

}

exports.UnlockUserId() = function(){

}

exports.RestartPassword = function(){

}

exports.AddRole = function(){

}

exports.RemoveRole = function(){

}

exports.GetRolesAdd = function(){

}

exports.GetSystemasAdd = function(){

}

exports.GetSystemsMulti = function(){

}
