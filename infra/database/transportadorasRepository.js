//Cadastro de Transportadoras

const { sequelize, Sequelize } = require('./connection')

const Transportadoras = sequelize.define ('transportadoras',{
id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
codigo: Sequelize.INTEGER,
razaosocial: Sequelize.STRING,
cnpj: Sequelize.INTEGER,
inscricaoEstadual: Sequelize.INTEGER,
cpf: Sequelize.INTEGER,
rg: Sequelize.INTEGER,
fantasia: Sequelize.STRING,
cep: Sequelize.INTEGER,
ruaAvenida: Sequelize.STRING,
bairro: Sequelize.STRING,
uf: Sequelize.STRING,
cidade: Sequelize.STRING,
telefone1: Sequelize.INTEGER,
telefone2: Sequelize.INTEGER,
ramal1: Sequelize.INTEGER,
ramal2: Sequelize.INTEGER,
fax: Sequelize.INTEGER,
site: Sequelize.STRING,
email: Sequelize.STRING,
seguimento: Sequelize.STRING,
contato: Sequelize.STRING
})

module.exports = Transportadoras
