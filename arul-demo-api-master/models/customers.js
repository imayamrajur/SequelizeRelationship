module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
	mobile: {
      type: Sequelize.STRING
    },
	email: {
      type: Sequelize.STRING
    }
    
  });

  return Customer;
};