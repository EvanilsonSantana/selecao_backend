const camera = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        ip: {
            type: DataTypes.STRING
        },

        usuario: {
            type: DataTypes.STRING

        },
        modelo: {
            type: DataTypes.STRING

        },
        data_instalacao: {
            type: DataTypes.STRING

        },
        contagem: {
            type: DataTypes.STRING

        }
    }, {
        tableName: 'camera'
    })

    return Camera

}

module.exports = camera