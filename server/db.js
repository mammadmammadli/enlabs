const { Sequelize } = require('sequelize')
const CompanyModel = require('./models/Company')
const UserModel = require('./models/User')
const OfficeModel = require('./models/Office')
const sequelize = new Sequelize(
    'netflix',
    'postgres',
    'London7070!',
    {
        host: 'localhost',
        dialect: 'postgres'
    },
);

const Company = CompanyModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Office = OfficeModel(sequelize, Sequelize)

Office.belongsTo(Company)
User.belongsTo(Office)
User.belongsTo(Company)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
    Company,
    Office,
    User,
}