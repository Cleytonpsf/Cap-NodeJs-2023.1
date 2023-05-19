const knexfile = require("../../knexfile")
const knex = require("knex")(knexfile["development"])

//instanciação das configurações do banco de dados -> com as configurações definidas no knexfile
module.exports = knex