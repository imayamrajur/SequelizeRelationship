module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {

        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.FLOAT
        },
        orderDate:{
            type: Sequelize.DATEONLY,
            defaultValue: new Date()
        },
        desc:{
            type: Sequelize.STRING
        }

    });
    return Order;
};