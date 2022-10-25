// let's write api routes for notes
const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
  let obj = {
    title: "Notes",
    name: 'Zain Ali Shan',
    age: 22
  }
  console.log(req.body);
  // res.send("Notes is API hit!")
  res.json(obj)
})

module.exports = router