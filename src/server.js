'use strict'

const Express = require('express')
const BodyParser = require('body-parser')
const Routes = require('./user/routes')

const Server = Express()

module.exports = () =>
  Server
    .use(BodyParser.json())
    .use('/', Routes)
