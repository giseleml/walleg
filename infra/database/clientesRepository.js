const { sequelize, Sequelize } = require('./connection')

const Clientes = sequelize.define('clientes', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: Sequelize.STRING,
  cpf: Sequelize.STRING,
  rg: Sequelize.STRING,
  sobrenome: Sequelize.STRING,
  email: Sequelize.STRING,
  nascimento: Sequelize.DATE
});

module.exports = Clientes
