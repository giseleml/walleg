const Sequelize = require('sequelize');
const sequelize = new Sequelize('walleg', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

module.exports = {
  sequelize, Sequelize
}


// Tela de Cadastro de Clientes
const Clientes = sequelize.define('clientes', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: Sequelize.STRING,
  cpf: Sequelize.STRING,
  rg: Sequelize.STRING,
  sobrenome: Sequelize.STRING,
  email: Sequelize.STRING,
  nascimento: Sequelize.DATE

});


//Tela de Cadastro de Fornecedores
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

//Tela de Cadastro de Produtos
const Produtos = sequelize.define('produtos', {
id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
codigo: Sequelize.STRING,
codigoBarras: Sequelize.STRING,
descricao: Sequelize.STRING,
complemento: Sequelize.STRING,
reduzida: Sequelize.STRING

});

//Tela de Compras
const Compras = sequelize.define ('compras', {
id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
fornecedor: Sequelize.INTEGER,
email: Sequelize.STRING,
codigo: Sequelize.INTEGER,
descricao: Sequelize.STRING,
quantidade: Sequelize.INTEGER,
valor: Sequelize.INTEGER,
ipi: Sequelize.INTEGER,
vrIpi: Sequelize.INTEGER,
icms: Sequelize.INTEGER,
entrega: Sequelize.DATE,
numerocompra: Sequelize.INTEGER,
datacompra: Sequelize.DATE,
dataentrega: Sequelize.DATE,
horaentrega: Sequelize.INTEGER,
observacao: Sequelize.STRING,
contato: Sequelize.STRING,
comprador: Sequelize.STRING

});

//Cadastro de Transportadoras
const Transportadoras = sequelize.define ('transportadoras',{
id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
codigo: Sequelize.INTEGER,
razaosocial: Sequelize.STRING,
cnpj: Sequelize.INTEGER,
inscrEstad: Sequelize.INTEGER,
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
});

//Cadastro de Vendedores
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

//Catálogo de Matéria Prima
const MateriaPrima = sequelize.define('materiaprima',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  produto: Sequelize.STRING,
  item: Sequelize.STRING,
  quantidade: Sequelize.STRING
})

//Catálogo de Kits
const Kits = sequelize.define('kits',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  produto: Sequelize.STRING,
  kit: Sequelize.STRING,
  quantidade: Sequelize.STRING
})

//Ajuste de Estoque
const Estoque = sequelize.define('ajusteestoque',{
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
