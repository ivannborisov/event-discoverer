const mongoose = require('mongoose');
const seedDB = require('./seed-db');

const MONGODB_URL = "mongodb+srv://event:eventpass@cluster0.60f7e.mongodb.net/eventDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL,  { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', err => {
    console.log(`Successfully connected to MongoDB server: ${MONGODB_URL}`);
    seedDB();
});

mongoose.connection.on('error', err => {
   console.log(err)
});

