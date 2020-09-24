const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('offices', {
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
