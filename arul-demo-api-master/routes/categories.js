module.exports = app => {
    const Categories = require("../controllers/categories-controller");

    var router = require("express").Router();
    
    router.post("/", Categories.create);
    
    router.get("/", Categories.findAll);
    
    router.get("/fk", Categories.find_FK_All);

    router.get("/common/:commonName", Categories.findCommonNameAll);

    router.get("/commonCategoryfk/:commonName", Categories.findCategoryCommonNameFK);

    router.get("/namefk/:name", Categories.findCategoryNameFK);
    
    router.get("/:id", Categories.findOne);

    router.put("/:id", Categories.update);

    router.delete("/:id", Categories.delete);

    

    

    app.use('/api/categories', router);
};