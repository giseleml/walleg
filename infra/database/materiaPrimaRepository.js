
//Catálogo de Matéria Prima
const { sequelize, Sequelize } = require('./connection')

const MateriaPrima = sequelize.define('materiaprima',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  produto: Sequelize.STRING,
  item: Sequelize.STRING,
  quantidade: Sequelize.STRING
})

module.exports = MateriaPrima
