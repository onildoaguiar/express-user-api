'use strict';

const express = require('express');
const Controller = require('./controller');

const BASE_URL = '/api/v1/user/';

module.exports = express.Router()
	.post(`${BASE_URL}/signUp`, Controller.signUp)
	.post(`${BASE_URL}/signIn`, Controller.signIn)
	.get(`${BASE_URL}/:id`, Controller.getById)
	.put(`${BASE_URL}/:id`, Controller.update)
	.delete(`${BASE_URL}/:id`, Controller.delete);
