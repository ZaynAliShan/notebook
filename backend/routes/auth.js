// let's write our authentication route
const express = require('express')
const router = express.Router()

// create and instance of model
const Users = require('../models/Users')

// let's post a user into our mongo db
router.post('/', (req, res) => {
  console.log(req.body); // unpack the data we took from user to send it into DB
  const user = Users(req.body);
  user.save();
  res.send(user);
})


// now let's allow our router to be exported from here
module.exports = router

// will use express validator to validate our data