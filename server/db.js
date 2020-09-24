const { Sequelize } = require('sequelize')
const CompanyModel = require('./models/Company')
const UserModel = require('./models/User')
const OfficeModel = require('./models/Office')
const TagModel = require('./models/Tag')
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
const Tag = TagModel(sequelize, Sequelize)
const UserTag = sequelize.define('user_tag', {})

Office.belongsTo(Company)
User.belongsTo(Office)
User.belongsTo(Company)
User.belongsToMany(Tag, { through: UserTag, unique: false })
Tag.belongsToMany(User, { through: UserTag, unique: false })

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    Company,
    Office,
    User,
    Tag,
}