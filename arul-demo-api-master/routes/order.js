module.exports = app => {
    const Order = require("../controllers/order-controller");
    var router = require("express").Router();

    router.post("/", Order.create);

    router.get("/", Order.findAll);

    router.get("/fk", Order.find_FK_All);

    router.get("/address/:address", Order.findAllByAddress);

    router.put("/:id", Order.update);

    router.delete("/:id", Order.delete);

    app.use('/api/order', router);

};