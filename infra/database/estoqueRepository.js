//Ajuste de Estoque
const { sequelize, Sequelize } = require('./connection')

const Estoque = sequelize.define('estoque',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  codigo: Sequelize.INTEGER,
  descricao: Sequelize.STRING,
  custo: Sequelize.INTEGER,
  tabela: Sequelize.INTEGER,
  estoqueatual: Sequelize.INTEGER,
  data: Sequelize.DATE,
  entrada: Sequelize.INTEGER,
  saida: Sequelize.INTEGER,
  observacao: Sequelize.STRING

})

module.exports = Estoque
