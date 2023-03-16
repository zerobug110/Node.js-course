const fs = require('fs');
const express = require('express');

const app = express();

// app.get('/', (req, res)=>{
// res.status(200).json({ message: 'hello from the server side', app: 'natour'})
// })

// app.post('/post', (req, res) => {
//     res.status(200).send('you can send post to this endpoin')
// })
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

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
