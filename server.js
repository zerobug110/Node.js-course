const express = require("express");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/ueser-route");
const chatRoute = require("./routes/chat-route");
dotenv.config();

const port = process.env.PORT || 3000;

app.use('/user', userRoute)
app.use('/chat', chatRoute)

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

