const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('companies', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}
