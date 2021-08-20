const db = require("../models");
const Order = db.Order;
const Customers = db.Customers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	
  Order.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
};

exports.findAll = (req, res) => {
	
  Order.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Order."
      });
    });
}; 

exports.find_FK_All = (req, res) => {
   Order.findAll({
    include: [{model:"Customers"},{model:"Product"}],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK data error."
    });
  });
 };

 exports.findAllByAddress = (req, res) => {
  const address = req.params.address;

  Order.findAll({
      where: {
    address: {
      [Op.like]:'%'+address+'%'
    }
    
  }
  })  
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categories with Common Name=" + address
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
};
