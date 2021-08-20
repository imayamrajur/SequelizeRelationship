const db = require("../models");
const OrderDetails = db.OrderDetails;
const Product = db.Product;
const Customers = db.Customers;
const Order = db.Order;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    OrderDetails.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OrderDetails."
      });
    });
};

exports.findAll = (req, res) => {
	
  OrderDetails.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Order Details."
      });
    });
};

exports.findAll_ProductByOrder = (req, res) => {
   Product.findAll({
     include:["Order"],
    //include: [{model:Order, as :"Order"}, {model:Product, as: "Product"}],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order and Producr data error."
    });
  });
 }; 

 exports.findAll_OrderByProduct = (req, res) => {
   Order.findAll({
     include:["Product"],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order and Producr data error."
    });
  });
 }; 



 exports.findAll_OrderByAddress = (req, res) => {
  const address = req.params.address;
   Order.findAll({
     include:["Product"],
      where: {
      address: {
      [Op.like]:'%'+address+'%'
    }    
  }
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order by Date  error."
    });
  });
 }; 


 exports.findAll_OrderByDate = (req, res) => {
  const orderDate = req.params.orderDate;
   Order.findAll({
     include:["Product"],
      where: {
      orderDate: {
      [Op.like]:'%'+orderDate+'%'
    }    
  }
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order by Date  error."
    });
  });
 }; 

 exports.find_Order_Product_Customer = (req, res) => {
   Order.findAll({
    // include:["Product"],
    include: [{model:Customers, as :"Customers"}, {model:Product, as: "Product"}],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order and Producr data error."
    });
  });
 }; 



 

/* exports.find_FK_All = (req, res) => {
   OrderDetails.findAll({
    include: ["Product","Order"],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order and Producr data error."
    });
  });
 }; */


 

 /* exports.find_FK_All = (req, res) => {
   OrderDetails.findAll({
    include: [{model:Order}, {model:Product}],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK Order and Producr data error."
    });
  });
 }; */