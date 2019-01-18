module.exports =  (db)  => {

  const Reparto = db.sequelize.define('T_REPARTO_INTELIGENTE', {
    ID_REPARTO_INTELIGENTE          :   { type: db.Sequelize.INTEGER },
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  })

  Reparto.removeAttribute('updatedAt');
  Reparto.removeAttribute('createdAt');
  Reparto.removeAttribute('id');

  return Reparto;
  };
