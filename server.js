const express = require('express');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("hello from the app")
})

app.listen(PORT,()=> console.log('hello from the sever'));
