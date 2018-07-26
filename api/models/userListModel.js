'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    required: true
  },
  profession: {
    type: String,
  },
  userId: {
    type: String,
  }
});

module.exports = mongoose.model('Users', userSchema);