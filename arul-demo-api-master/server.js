const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "*"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/customers")(app);
require("./routes/user")(app);
require("./routes/categories")(app);
require("./routes/product")(app);
require("./routes/order")(app);
require("./routes/orderdetails")(app);
const PORT = process.env.PORT || 6080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});