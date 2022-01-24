const dados_camera = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        
        ip: {
            type: DataTypes.STRING,
            allowNull: false
        },

        usuario: {
            type: DataTypes.STRING,
            allowNull: false

        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false

        },
        data_instalacao: {
            type: DataTypes.STRING,
            allowNull: false

        },
        contagem: {
            type: DataTypes.STRING,
            allowNull: false

        }
    }, {
        tableName: 'dados_camera'
    })

    return Camera

}

module.exports = dados_camera