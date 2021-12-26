const EventService = require('../services/events-service');

async function getEvents (req, res) {
    try {
        const searchParam = req.query.search || null;

        const events = await EventService.getEvents(searchParam);

        res.json(events);

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, error: error.message});
    }
}

module.exports = {
    getEvents
};
