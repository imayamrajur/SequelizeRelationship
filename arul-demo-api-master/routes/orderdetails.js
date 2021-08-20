module.exports = app =>{
    const OrderDetails = require("../controllers/orderdetails-controller");
    
    var router = require("express").Router();

    router.post("/", OrderDetails.create);

    router.get("/", OrderDetails.findAll);

    router.get("/findproductbyorder", OrderDetails.findAll_ProductByOrder);

    router.get("/findorderbyproduct", OrderDetails.findAll_OrderByProduct);

    router.get("/findorderbyaddress/:address", OrderDetails.findAll_OrderByAddress);

    router.get("/findorderbydate/:orderDate", OrderDetails.findAll_OrderByDate);

    router.get("/findorderproductcustomer", OrderDetails.find_Order_Product_Customer);

    

    app.use('/api/orderdetails', router);
};