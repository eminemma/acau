var oracle = require('../routes/conn');
exports.GetAll = function(req,res){
  var db = oracle.conectarDB(res);
  var limite = req.params.limite;

  var filters = {};

  if (limite !== undefined) {
    filters['limit'] = limite;
  }
  return db.Reparto.findAll(filters).then(result => {
   return res.status(200).json(result);
  });
}
