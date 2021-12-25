const EventService = require('../services/events-service');

async function getEvents (req, res) {
    try {
        const reqBody = req.body;

        const events = EventService.getEvents();

        res.json(events);

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, error: error.message});
    }
}

module.exports = {
    getEvents
};
