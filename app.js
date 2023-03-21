const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json())


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body)
    const newId = tours[tours.length -1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err => {
        res.status(201).json({
            staus: "success",
            data: {
                tours: newTour
            }
        })
    })
    // res.send('done')
})

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours
        }
    });
})

app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params)

    const id = rq.params.id * 1;
    const tour = tours.find(el => el.id === req.params)
    res.status(200).json({
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
