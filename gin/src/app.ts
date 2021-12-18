const express = require('express');
const cors = require('cors');

const database = require('./database')();

const app = express();
app.use(cors());
app.use(require('./logger')());

const config = require('../config.json');

app.listen(config.port, '0.0.0.0', () => {
    console.log('Started web-server on 0.0.0.0:%d', config.port);

    require('./routes')(app, database)
});