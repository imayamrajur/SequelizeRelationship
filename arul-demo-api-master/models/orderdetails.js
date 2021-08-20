module.exports = (sequelize, Sequelize) => {
    const OrderDetails = sequelize.define("orderdetails",{
        id:{
            allowNull:false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        unitPrice: {
            type: Sequelize.FLOAT
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        discount: {
            type: Sequelize.FLOAT
        },
        productId : {
			type : Sequelize.INTEGER,
			unique : false,
            allowNull : false,
		},
		
		orderId : {
			type : Sequelize.INTEGER,
			unique : false,
            allowNull : false,
		}
    });


    return OrderDetails;
};