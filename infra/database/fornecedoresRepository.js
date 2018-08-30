//Tela de Cadastro de Fornecedores
const { sequelize, Sequelize } = require('./connection')

const Fornecedores = sequelize.define('fornecedores', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  codigo: Sequelize.STRING,
  cpf: Sequelize.STRING,
  rg: Sequelize.STRING,
  nascimento: Sequelize.DATE,
  nome: Sequelize.STRING,
  sobrenome: Sequelize.STRING,
  email: Sequelize.STRING

});


module.exports = Fornecedores
