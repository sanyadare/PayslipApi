'use strict';

const express= require('express');
const eventController = require('../controllers/EventController');
const router = express.router();

const{getEvents}= eventController;

router.get('/events',getEvents);

module.exports= {
    routes:router
}