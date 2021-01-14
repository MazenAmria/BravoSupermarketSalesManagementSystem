const express = require("express");
const authRoutes = require("./routes/authRoute");
const requestsRoute = require("./routes/reuqestsRoute");
const tendersRoute = require("./routes/tendersRoute");
const employeesRoute = require("./routes/employeesRoute");
const errorRoute = require("./routes/errorRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const managerCustomersRoute = require("./routes/managerCustomersRoute");
const salesRoute = require("./routes/salesRoute");
const invoiceRoute = require("./routes/invoiceRoute");
const cookieParser = require('cookie-parser');
const {reqAuth} = require('./middlewares/authMiddleware');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// Middleware & Static Files
app.use(express.static('assets'));
app.use(express.static('node_modules/ejs'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// User Authentication
app.get("*", reqAuth);
app.use(authRoutes);
app.use(requestsRoute);
app.use(tendersRoute);
app.use(employeesRoute);
app.use(categoriesRoute);
app.use(managerCustomersRoute);
app.use(salesRoute);
app.use(invoiceRoute);
app.use(errorRoute);
