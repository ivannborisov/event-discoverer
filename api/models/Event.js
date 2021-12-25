const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true },
    date: { type: Date, required: true },
    isVirtual: {type: Boolean, default: false},
    address: {type: String}
});

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;
