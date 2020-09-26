const { User, Tag, Office, Company, UserTag } = require("../db");

const UserService = {
  addTag: async (req, res) => {
    try {
      const userTag = await UserTag.create(req.body);
      userTag.save();
      res.json(userTag);
    } catch (e) {
      console.log(e);
    }
  },
  addUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      user.save();
      res.json(user);
    } catch (e) {
      console.log(e);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      await User.destroy({
        where: { id },
      });
      res.json('Ok');
    } catch (e) {
      console.log(e);
    }
  },
  getAll: async (_, res) => {
    const users = await User.findAll({
      order: [["id", "ASC"]],
      include: [{ model: Tag }, { model: Office }, { model: Company }],
    });
    res.send(users);
  },
  removeTag: async (req, res) => {
    try {
      await UserTag.destroy({
        where: req.body,
      });

      res.json("ok");
    } catch (e) {
      console.log(e);
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params;

    try {
      await User.update(req.body, { where: { id } });
      const user = await User.findOne({
        where: { id },
        include: [{ model: Tag }, { model: Office }, { model: Company }],
      });

      res.json(user);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = UserService;
