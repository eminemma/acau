module.exports =  (db)  => {

  const Usuario = db.sequelize.define('USUARIOS', {
    ID_USUARIO          :   { type: db.Sequelize.INTEGER },
    DESCRIPCION         :   { type: db.Sequelize.STRING(50) },
    AREA_ID             :   { type: db.Sequelize.DATE},
    CARGO_ID            :   { type: db.Sequelize.INTEGER },
    AREA_ID_PRINCIPAL   :   { type: db.Sequelize.INTEGER },
    CORREO_ELECTRONICO  :   { type: db.Sequelize.STRING(200) },
    FECHA_ALTA          :   { type: db.Sequelize.DATE },
    FECHA_BAJA          :   { type: db.Sequelize.DATE },
    MOTIVO_BAJA         :   { type: db.Sequelize.STRING(400) },
    CLAVE_SECRETA       :   { type: db.Sequelize.STRING(100) },
    URL_MANUAL          :   { type: db.Sequelize.STRING(100) }
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  })

  Usuario.removeAttribute('updatedAt');
  Usuario.removeAttribute('createdAt');
  Usuario.removeAttribute('id');

  return Usuario;
  };
