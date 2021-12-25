const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controller');

router.get('/health', (req, res) => {
    res.send('server is up and running')
});

router.get('/api/events', eventsController.getEvents);

module.exports = router;
