const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json())


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body)
})

app.get('/api/v1/tours', (req, res) => {
    res
    .status(200).json({
        status: 'success',
        data: {
            tours
        }
    });
})

const port = 3000
app.listen(port, ()=>{
    console.log(`app runing on port ${port}...`)
})
