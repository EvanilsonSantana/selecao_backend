const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Camera = require('./camera')
const Gestor = require('./gestor')
const Estabelecimento = require('./estabelecimento')
const Contagem = require('./contagem')

const dados_camera = Camera(sequelize, Sequelize)
const gestor = Gestor(sequelize, Sequelize)
const estabelecimento = Estabelecimento(sequelize, Sequelize)
const dados_contagem = Contagem(sequelize, Sequelize)

const db = {
    dados_camera,
    dados_contagem,
    gestor,
    estabelecimento,
    sequelize
}

module.exports = db