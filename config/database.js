const { database } = require("pg/lib/defaults");

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'coleta_de_dados',
    username: 'postgres',
    password: 'postgres'
}