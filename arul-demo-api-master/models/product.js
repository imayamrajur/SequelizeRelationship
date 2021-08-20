
module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("product", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        quantity: {
            type: Sequelize.INTEGER
        }
       
    });

   
    
  return Product;
};


