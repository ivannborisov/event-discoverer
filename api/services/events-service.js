const Event = require('../models/Event');

async function getEvents () {
    const events = await Event.find({});

    return events;
}

module.exports = {
    getEvents
}
