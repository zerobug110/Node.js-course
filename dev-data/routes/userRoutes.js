const express = require('express');

const router = express.Router();

router
    .route('/')
    .get(getAllTours)
    .post(createTour);

router
    .route('/:idd')
    .get(getTour)
    .patch(uploadeTour);

module.exports(router);