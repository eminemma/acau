exports.conectarDB = function(res) {
  const Sequelize = require("sequelize-oracle");
  var funcion = require("../funcion");
  console.log("Conectandose a Base de Datos...");
  const sequelize = new Sequelize("desa_01", "kanban", "esquema", {
    host: "desa-ent.loteriadecordoba.com.ar",
    dialect: "oracle",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
    }
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Se conecto correctamente a la base de datos.");
    })
    .catch(err => {
      var m = {};
      m.message = "Imposible conectarse a la base de datos:" + err.message;
      m.error = true;
      funcion.mostrarErrorDB(m, res);
    });

  var db = {};
  db.sequelize = sequelize; //contain a settings of database
  db.Sequelize = Sequelize;
  db.Usuario = require("../models/usuario")(db, Sequelize);
  db.Usuario.sync();
  //db.Acceso = require('../models/acceso')(db, Sequelize);
  /*db.sequelize = sequelize; //contain a settings of database
db.Sequelize = Sequelize;
db.Acceso = require('../models/acceso')(db, Sequelize);
db.Provincia = require('../models/provincia')(db, Sequelize);
db.Localidad = require('../models/localidad')(db, Sequelize);
db.Barrio = require('../models/barrio')(db, Sequelize);
db.TipoDocumento = require('../models/tipo_documento')(db, Sequelize);
db.AgenciaHipica = require('../models/agencia')(db, Sequelize);
db.AgenciaUsuario = require('../models/usuario')(db, Sequelize);*/

  /*db.Acceso.sync();*/
  /*db.Provincia.sync();
db.Localidad.sync();
db.Barrio.sync();*/
  /*db.TipoDocumento.sync({force: true}).then(function(){
    db.TipoDocumento.bulkCreate([{
    ID_TIPO_DOCUMENTO:1,
    DESCRIPCION:'DNI'
  },{
    ID_TIPO_DOCUMENTO:2,
    DESCRIPCION:'CUIT'
  },{
    ID_TIPO_DOCUMENTO:3,
    DESCRIPCION:'CUIL'
  }]);
});*/
  /*db.AgenciaHipica.sync({force: true}).then(function(){
  db.AgenciaHipica.bulkCreate([{
    ID_AGENCIA_HIPICA             :   1,
    NOMBRE_AGENCIA                :  'PRIMER AGENCIA',
    ID_TIPO_DOCUMENTO             :   1,
    NRO_DOCUMENTO                 :   '30-69432723-7',
    EMAIL                         :   'emmanuel.quattropani@loteriacba.com.ar',
    TELEFONO                      :   '23211466161',
    CELULAR                       :   '22131164646',
    ID_PROVINCIA                  :   1,
    ID_LOCALIDAD                  :   1,
    ID_BARRIO                     :   1,
    NRO_DIRECCION                 :   2222,
    DIRECCION                     :   '27 ABRIL 185',
    TIPO_EDIFICIO                 :   'EDIFICIO',
    NOMBRE_APELLIDO_RESPONSABLE   :   'LOTERIA DE CORDOBA',
    CARGO                         :   'DIRECTO',
    ID_TIPO_DOCUMENTO_RESPONSABLE :   1,
    NRO_DOCUMENTO_RESPONSABLE     :   '2222222',
    TELEFONO_RESPONSABLE          :   '23211466161',
    CELULAR_RESPONSABLE           :   '23211466161',
     MADRE                        :   'SI'
  }]);
});
*/

  /*db.AgenciaUsuario.sync({force: true}).then(function(){
  db.AgenciaUsuario.bulkCreate([{
    ID_AGENCIA_USUARIO        : 1,
    ID_TIPO_DOCUMENTO         :   1,
    DOCUMENTO                 :   '32389001',
    NOMBRE_APELLIDO_USUARIO   :   'QUATTROPANI EMMANUEL',
    ID_AGENCIA_HIPICA         :   1,
    NRO_INSCRIPCION           :   '00000001',
    EMAIL                     :   'equattropani@gmail.com',
    ID_AGENCIA_PRINCIPAL      :   1,
    ROL                       :   'ROL_TURF_USUARIO',
    HABILITADO                :   'SI',
    TIPO_USUARIO              :   'EXTERNO',
    CLAVE_USUARIO             : '$2a$16$iyknOA407fW6SpG09GVNnemj9NQfPGCe7QHhm/d7X4dMtvOlpEQFy'
  }]);
});*/

  return db;
};
/*module.exports = db;*/
