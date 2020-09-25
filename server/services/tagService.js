const { Tag, UserTag } = require("../db");

const TagService = {
  addTag: async (req, res) => {
    try {
      const tag = await Tag.create(req.body);

      res.json(tag);
    } catch (e) {
      console.log(e);
    }
  },
  deleteTag: async (req, res) => {
    const { id } = req.params;
    try {
      await UserTag.destroy({
        where: {
          tagId: id,
        },
      });

      await Tag.destroy({
        where: {
          id,
        },
      });

      res.json("Ok");
    } catch (e) {
      console.log(e);
    }
  },
  getAll: async (req, res) => {
    const tags = await Tag.findAll();

    res.json(tags);
  },
};

module.exports = TagService;
