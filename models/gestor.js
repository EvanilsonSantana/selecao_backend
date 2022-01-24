const Estabelecimento = require('./estabelecimento')
        
const gestor = (sequelize, DataTypes) => {
    const Gestor = sequelize.define('Gestor', {
        
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, {tableName: 'gestor'})
    {
        // Tive problema em criar o relacionamento entre as entidades
        
        // Gestor.belongsTo(Estabelecimento, {
        //     constraint: true,
        //     foreignKey: 'idEstabelecimento'
        // })
        
        // Estabelecimento.hasMany(Gestor, {
        //     foreignKey: 'idGestor'
        // })
    }
    
    return Gestor

}


module.exports = gestor

