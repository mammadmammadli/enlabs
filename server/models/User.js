const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
