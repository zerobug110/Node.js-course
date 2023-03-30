const express = require("express");
const colors= require("colors");
const dotenv = require("dotenv");
const userRoute = require("./routes/ueser-route");
const errorHanddler = require("./middleware/error-middleware")
const connectDB = require("./config/db")
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

//connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/user', userRoute)
app.use(errorHanddler, ()=>{})

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

