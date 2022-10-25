// let's create schema for out Notes Table
const mongoose = require('mongoose');

const { Schema } = mongoose // getting a Schema namespace from mongoose

const NotesSchema = new Schema({
  title: { // for title of a note
    type: String,
    required: true
  },
  description: { // for description of note
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('notes', NotesSchema); // making a model(table) of notes by using NotesSchema