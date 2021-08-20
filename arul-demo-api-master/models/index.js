const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const { Model } = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Customers = require("./customers.js")(sequelize, Sequelize);
db.User = require("./user.js")(sequelize, Sequelize);
db.Categories = require("./categories.js")(sequelize, Sequelize);
db.Product = require("./product.js")(sequelize, Sequelize);
db.Order = require("./order.js")(sequelize, Sequelize);
db.OrderDetails = require("./orderdetails.js")(sequelize, Sequelize);

db.User.hasOne(db.Customers, { foreignKey: 'userId', as: 'Customers'});
db.Customers.belongsTo(db.User, {foreignKey: 'userId', as: 'User'});


db.Categories.hasMany(db.Product, { as: 'Product'});
db.Product.belongsTo(db.Categories, {foreignKey: 'categoryId', as: 'Categories'});

db.Customers.hasMany(db.Order, { as: 'Order'});
db.Order.belongsTo(db.Customers, {foreignKey: 'customerId', as: 'Customers'});

db.Product.hasMany(db.Order, { as: 'Order'});
db.Order.belongsTo(db.Product, {foreignKey: 'productId', as: 'Product'});

db.Order.belongsToMany(db.Product, {through: 'OrderDetails'});
db.Product.belongsToMany(db.Order, {through: 'OrderDetails'});

module.exports = db;