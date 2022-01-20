const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Camera = require('./camera')

const camera = Camera(sequelize, Sequelize)

const db = {
    camera, 
    sequelize
}

module.exports = db