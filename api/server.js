const express = require('express');
const router = require('./config/router');
const cors = require('cors');
const db = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`API server listeting on port ${port} ...`);
});
