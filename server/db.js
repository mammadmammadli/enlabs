const { Sequelize } = require("sequelize");
const CompanyModel = require("./models/Company");
const UserModel = require("./models/User");
const OfficeModel = require("./models/Office");
const TagModel = require("./models/Tag");
const sequelize = new Sequelize("netflix", "postgres", "London7070!", {
  host: "localhost",
  dialect: "postgres",
});

const Company = CompanyModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Office = OfficeModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const UserTag = sequelize.define("user_tag", {});

Office.belongsTo(Company);
User.belongsTo(Office);
User.belongsTo(Company);
User.belongsToMany(Tag, { through: UserTag, unique: false });
Tag.belongsToMany(User, { through: UserTag, unique: false });

sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});

async function mockData() {
  try {
    const company = await Company.create({ name: "Enlabs" });
    company.save();
    const office = await Office.create({
      city: "Tallin",
      companyId: company.id,
    });
    office.save();

    await User.create({
      firstName: "Mammad",
      lastName: "Mammadli",
      phoneNumber: "+994505396290",
      birthDate: "1997-12-24T03:24:00",
      officeId: 1,
      companyId: 1,
    });
  } catch (e) {
    console.log(e);
  }
}

mockData();

module.exports = {
  Company,
  Office,
  User,
  Tag,
  UserTag,
};
