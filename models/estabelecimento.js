const Camera = require('./camera')
const estabelecimento = (sequelize, DataTypes) => {
    const Estabelecimento = sequelize.define('Estabelecimento', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        endereco: {
            type: DataTypes.STRING,
            allowNull: false
    
        },

        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        tableName: 'estabelecimento'
    })

    // Tive problema em criar o relacionamento entre as entidades
    // Estabelecimento.hasMany(Camera, {
    //     foreignKey: 'idCamera'
    // })

    return Estabelecimento

}

module.exports = estabelecimento