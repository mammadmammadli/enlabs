const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4300;
const UserService = require("./services/userService");
const TagService = require("./services/tagService");
const OfficeService = require("./services/officeService");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.get("/users", UserService.getAll);
app.post("/users", UserService.addUser);
app.post("/users/add-tag", UserService.addTag);
app.post("/users/remove-tag", UserService.removeTag);
app.put("/user/:id", UserService.updateUser);
app.delete('/user/:id', UserService.deleteUser)

app.get("/tags", TagService.getAll);
app.post("/tags", TagService.addTag);
app.delete("/tag/:id", TagService.deleteTag);

app.get('/offices', OfficeService.getOfficeByCompanyId);
app.post('/offices', OfficeService.addOffice);
app.delete('/office/:id', OfficeService.deleteOffice);

app.listen(port, () => {
  console.log("Server is running");
});
