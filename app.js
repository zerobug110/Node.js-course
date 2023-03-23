const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log('hello from the middlleware');
    next()
})

app.userr ((req, res, next) => {
    req.requestTime = new Date().ttosISOString;
    next();
})


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
    const tour = tours.find(el => el.id === id)

    // if(id > tours.length) {    
    if(! tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
})

app.patch('/api/v1/tours/', (req, res) => {

    if(req.params.id * 1 > tours.length) { 
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid'
        })
    }
    res.status(200).json({
        status: 'success'
    });
})

app.delete('/api/v1/tours', (req, res) => {
    if(req.params.id * 1 > tours.length) { 
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid'
        })
    }
    res.status(200).json({
        status: 'success'
    });
})

const port = 3000
app.listen(port, ()=>{
    console.log(`app runing on port ${port}...`)
})  
