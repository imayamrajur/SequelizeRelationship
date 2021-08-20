module.exports = (sequelize, Sequelize) =>{
    const Categories = sequelize.define("categories",{
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        name: {
            type: Sequelize.STRING
        },
        commonName: {
            type: Sequelize.STRING
        }
        
    });
    return Categories;
};

