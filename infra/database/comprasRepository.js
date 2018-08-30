//Tela de Compras
const { sequelize, Sequelize } = require('./connection')

const Compras = sequelize.define ('compras', {
id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
fornecedor: Sequelize.INTEGER,
email: Sequelize.STRING,
codigo: Sequelize.INTEGER,
descricao: Sequelize.STRING,
quantidade: Sequelize.INTEGER,
valor: Sequelize.INTEGER,
ipi: Sequelize.INTEGER,
vripi: Sequelize.INTEGER,
icms: Sequelize.INTEGER,
entrega: Sequelize.DATE,
numerocompra: Sequelize.INTEGER,
datacompra: Sequelize.DATE,
dataentrega: Sequelize.DATE,
horaentrega: Sequelize.INTEGER,
observacao: Sequelize.STRING,
contato: Sequelize.STRING,
comprador: Sequelize.STRING

})

module.exports = Compras
