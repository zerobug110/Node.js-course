const e = require('express');
const express = require('express');

const app = express()

app.use(express.json());
app.use(express.urlencoded()) 

const port = 3000;
app.listen(`${port}`);


app.get('/', (req, res, next) => {{
    console.log(`listing to localhost ${port}`);
    next();
}})

app.post('/', (req, res) => {
    console.log('createdd')
})
