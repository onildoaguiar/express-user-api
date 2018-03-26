'use strict'

const Express = require('express')
const BearerAuthorization = require('express-authorization-bearer')
const Controller = require('./controller')

const BASE_URL = '/api/v1/user'

module.exports = Express.Router()
  .post(`${BASE_URL}/signUp`, Controller.signUp)
  .post(`${BASE_URL}/signIn`, Controller.signIn)
  .get(`${BASE_URL}/:id`, BearerAuthorization, Controller.byId)
  .put(`${BASE_URL}/:id`, BearerAuthorization, Controller.update)
  .delete(`${BASE_URL}/:id`, BearerAuthorization, Controller.delete)
