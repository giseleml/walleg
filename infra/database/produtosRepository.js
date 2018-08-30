
//Tela de Cadastro de Produtos

const { sequelize, Sequelize } = require('./connection')

const Produtos = sequelize.define('produtos', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  codigo: Sequelize.STRING,
  codigoBarras: Sequelize.STRING,
  descricao: Sequelize.STRING,
  complemento: Sequelize.STRING,
  reduzida: Sequelize.STRING

});


module.exports = Produtos
