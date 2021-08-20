
module.exports = app => {
  const User = require("../controllers/user-controller");

  var router = require("express").Router();

  router.post("/", User.create);

  router.get("/", User.findAll);

   router.get("/userbycustomers/", User.findAll_UserByCustomer);

   router.get("/:id", User.findOne);

  router.put("/:id", User.update);

  router.delete("/:id", User.delete);

  app.use('/api/user', router);
};