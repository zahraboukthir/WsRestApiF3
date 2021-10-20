const express = require("express");

const app = express();
const UserRoutes=require("./Routes/UserRoures")
//3-SETUP YOUR ENV VARIABLES
require("dotenv").config({ path: "./config/.env" });

const connectDB = require("./config/connectDB");

//5-SETUP THE JSON MIDDLEWARE
app.use(express.json());

//2-CONNECT THE DATABASE
connectDB();
/***************START User CRUD ******************/
app.use("/users",UserRoutes)
/***************END User CRUD ******************/
//1-START THE SERVER
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The Server is Running ${port}....`);
});
