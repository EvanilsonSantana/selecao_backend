const dados_contagem = (sequelize, DataTypes) => {
    const Contagem = sequelize.define('Contagem', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        Channel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        EndTime: {
            type: DataTypes.STRING,
            allowNull: false

        },

        EnteredSubtotal: {
            type: DataTypes.INTEGER,
            allowNull: false

        },

        ExitedSubtotal: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        
        RuleName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        StartTime: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'dados_contagem'
    })

    return Contagem

}

module.exports = dados_contagem