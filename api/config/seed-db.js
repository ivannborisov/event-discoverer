const Event = require('../models/Event');

const data = [
    {
        title: "Event 1",
        description: "Description for event 1",
        category: "AI",
        date: new Date (),
        isVirtual: false,
        address: "Address for event 1"
    },
    {
        title: "Event 2",
        description: "Description for event 2",
        category: "Mobile Development",
        date: new Date (),
        isVirtual: false,
        address: "Address for event 2"
    },
    {
        title: "Event 3",
        description: "Description for event 3",
        category: "Robotics",
        date: new Date (),
        isVirtual: false,
        address: "Address for event 3"
    },
    {
        title: "Event 4",
        description: "Description for event 4",
        category: "Robotics",
        date: new Date (),
        isVirtual: false,
        address: "Address for event 4"
    },
    {
        title: "Event 5",
        description: "Description for event 5",
        category: "AI",
        date: new Date (),
        isVirtual: false,
        address: "Address for event 5"
    },
    {
        title: "Event 6",
        description: "Description for event 6",
        category: "AI",
        date: new Date (),
        isVirtual: false,
        address: "Address for event 6"
    }

]

async function seedDB () {

    const existedEvents = await Event.find({});

    if (existedEvents.length === 0) {
        console.log('There is no saved events.')
        console.log('Seeding the database...');

        data.forEach((event) => {
            let newEvent = new Event(event);
            newEvent.save();
        });
    }
}

module.exports = seedDB;