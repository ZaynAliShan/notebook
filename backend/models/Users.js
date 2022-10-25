// Let's create schema for our Users table

const mongoose = require('mongoose');

const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: { // the date our user got registered
    type: Date,
    default: Date.now
  }
});

// now exporting our table named as users, with schema name as UserSchema
module.exports = mongoose.model('users', UserSchema); // we are saying to create a table users from our schema UserSchema