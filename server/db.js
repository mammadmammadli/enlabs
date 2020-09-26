const { Sequelize } = require("sequelize");
const CompanyModel = require("./models/Company");
const UserModel = require("./models/User");
const OfficeModel = require("./models/Office");
const TagModel = require("./models/Tag");
const sequelize = new Sequelize("", "", "", {
  host: "localhost",
  dialect: "postgres",
});

const User = UserModel(sequelize, Sequelize);
const Company = CompanyModel(sequelize, Sequelize);
const Office = OfficeModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const UserTag = sequelize.define("user_tag", {});

Office.belongsTo(Company);
User.belongsTo(Office);
User.belongsTo(Company);
User.belongsToMany(Tag, { through: UserTag, unique: false });
Tag.belongsToMany(User, { through: UserTag, unique: false });

sequelize.sync({ force: true }).then(() => {
  mockData();

  console.log(`Database & tables created!`);
});

async function mockData() {
  try {
    const company = await Company.create({ name: "Enlabs" });
    company.save();
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  Company,
  Office,
  User,
  Tag,
  UserTag,
};
