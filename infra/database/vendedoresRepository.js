//Cadastro de Vendedores
const { sequelize, Sequelize } = require('./connection')

const Vendedores = sequelize.define('vendedores', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  codigo: Sequelize.INTEGER,
  nome: Sequelize.STRING,
  endereco: Sequelize.STRING,
  bairro: Sequelize.STRING,
  cidade: Sequelize.STRING,
  uf: Sequelize.STRING,
  telefone: Sequelize.INTEGER,
  rgcargo: Sequelize.STRING,
  apelido: Sequelize.STRING,
  comissao: Sequelize.INTEGER
})

module.exports = Vendedores
