var oracle = require('../routes/conn');
exports.GetAll = function(req,res){
  var db = oracle.conectarDB(res);
  var limite = req.params.limite;
  console.log(limite);
  return db.Usuario.findAll({ limit: limite }).then(result => {
    return res.status(200).json(result);
  });
}
