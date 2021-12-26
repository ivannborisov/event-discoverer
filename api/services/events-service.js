const Event = require('../models/Event');

async function getEvents (searchParam) {
    let query = {};

    if (searchParam) {
        query = {
            $or: [
                { title: {$regex: searchParam, $options: 'i'} },
                { description: {$regex: searchParam, $options: 'i'} }
            ] 
        }
    }

    const events = await Event.find(query);

    return events;
}

module.exports = {
    getEvents
}
