const knex = {
    // configuração do banco de dados na instancia development (desenvolvimento)
    development: {
        client: 'mysql2',
        connection: {
            host : '127.0.0.1',
            port : 3306,
            user : 'root',
            password : 'root',
            database : 'cap-nodejs'
        },
        // versionamento do banco de dados
        migrations: {
            tableName: "migrations",
            directory: `${__dirname}/src/database/migrations`
        }
    }
}

module.exports = knex
