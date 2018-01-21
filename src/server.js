'use strict';

const express = require('express');
const bodyParser = require('express');
const Routes = require('./user/routes');
const Config = require('./config/env');

const Console = console;
const server = express();

module.exports.start = async () => {
    server.use(bodyParser.json());
    server.use('/', Routes);
    server.listen(Config.server.port || 3000, () => Console.log(`Server running on port ${Config.server.port || 3000}`));
};
