const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('tags', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
