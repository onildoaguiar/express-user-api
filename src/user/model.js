'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const userModel = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permission: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  },
  lastedLogin: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
})

module.exports = Mongoose.model('User', userModel)
