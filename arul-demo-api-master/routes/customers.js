module.exports = app => {
  const Customers = require("../controllers/customers-controller");

  var router = require("express").Router();

  router.post("/", Customers.create);

  router.get("/", Customers.findAll);

  router.get("/:id", Customers.findOne);

  router.put("/:id", Customers.update);

  router.delete("/:id", Customers.delete);

  app.use('/api/customers', router);
};