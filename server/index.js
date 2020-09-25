const { componentFactoryName } = require("@angular/compiler");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4300;
const { Company, User, Office, Tag, UserTag } = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.get("/users", async (req, res) => {
  const users = await User.findAll({
    attributes: {
      exclude: ["tag.user_tag"],
    },
    order: [["id", "ASC"]],
    include: [{ model: Tag }, { model: Office }, { model: Company }],
  });
  res.send(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    user.save();
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});

app.get("/tags", async (req, res) => {
  const tags = await Tag.findAll();

  res.json(tags);
});

app.post("/tags", async (req, res) => {
  try {
    const tag = await Tag.create(req.body);

    res.json(tag);
  } catch (e) {
    console.log(e);
  }
});

app.delete("/tag/:id", async (req, res) => {
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

    res.json('Ok')
  } catch (e) {
    console.log(e);
  }
});

app.post("/users/add-tag", async (req, res) => {
  try {
    const userTag = await UserTag.create(req.body);
    userTag.save();
    res.json(userTag);
  } catch (e) {
    console.log(e);
  }
});

app.post("/users/remove-tag", async (req, res) => {
  try {
    await UserTag.destroy({
      where: req.body,
    });

    res.json("ok");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
