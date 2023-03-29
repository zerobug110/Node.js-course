const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/ueser-route");
const errorHanddler = require("./middleware/error-middleware")

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/user', userRoute)
app.use(errorHanddler, ()=>{})

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

