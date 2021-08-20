const db = require("../models");
const Categories = db.Categories;
const Product = db.Product;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    Categories.create(req.body)
    .then(data=>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some Error Occurred while Create the Categories."
        });
    });
};


exports.findAll = (req, res) => {
	
  Categories.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categories."
      });
    });
}; 

exports.find_FK_All = (req, res) => {
   Categories.findAll({
    include: ["Product"],
  }).then(data => {
    res.status(500).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message || "FK data error."
    });
  });
 };

 exports.findCategoryCommonNameFK = (req, res) => {
  const commonName = req.params.commonName;

  Categories.findAll({
      include: ["Product"],
      where: {
    commonName: {
      [Op.like]:'%'+commonName+'%'
    }
    
  }
  })  
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categories with Common Name=" + commonName
      });
    });
};

exports.findCategoryNameFK = (req, res) => {
  const name = req.params.name;

  Categories.findAll({
      include: ["Product"],
      where: {
    name: {
      [Op.like]:'%'+name+'%'
    }
    
  }
  })  
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categories with Common Name=" + name
      });
    });
};


 exports.findOne = (req, res) => {
  const id = req.params.id;

  Categories.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categories with id=" + id
      });
    });
};


exports.findCommonNameAll = (req, res) => {
  const commonName = req.params.commonName;

  Categories.findAll({
      where: {
    commonName: {
      [Op.like]:'%'+commonName+'%'
    }
    
  }
  })  
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categories with Common Name=" + commonName
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Categories.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categories was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Categories with id=${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Categories.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id
      });
    });
};


