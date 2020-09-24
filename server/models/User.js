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
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}
