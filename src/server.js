'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./user/routes');

const server = express();

module.exports = async () => {
	server.use(bodyParser.json());
	server.use('/', Routes);
	return server;
};
