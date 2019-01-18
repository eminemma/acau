var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.get('/:limite?/:descripcion?', function(req, res){usuarioController.GetAll(req,res)});

module.exports = router;
