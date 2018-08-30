//Catálogo de Kits
const { sequelize, Sequelize } = require('./connection')

const Kits = sequelize.define('kits',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  produto: Sequelize.STRING,
  kit: Sequelize.STRING,
  quantidade: Sequelize.STRING
})

module.exports = Kits
