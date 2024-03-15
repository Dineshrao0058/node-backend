const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors")
const admin = require("./routes/AdminRoutes");
const employeeRoute = require("./routes/EmployeeRoutes");
const ProductsRoute = require("./routes/ProductRoutes");
const ExpensesRoute = require("./routes/ExpensesRoutes");
const salesRoute = require("./routes/SalesRoutes");
const app = express();
app.use(express.json())
app.use(cors())
port = 8000;
URL = "mongodb://127.0.0.1:27017/coconutbar"


mongoose
  .connect(URL)
  .then(console.log("DB connected sucessfully"))
  .catch((err) => {
    console.log(err);
  });
app.use("/admin", admin);
app.use("/employees", employeeRoute);
app.use("/product", ProductsRoute);
app.use("/expenses", ExpensesRoute);
app.use("/sales", salesRoute)


app.listen(port, (err) => {
  if (!err) {
    console.log(`Server Started on Port ${port}`);
  } else {
    console.log("Error in server connection");
  }
}); 