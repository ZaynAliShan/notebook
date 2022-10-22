// entry point for backend
//1. first we want to connect to our database using mongoose - refer to db.js

//================================================================
// import connect_to_mongodb
const connect_to_mongodb = require('./db')

connect_to_mongodb();

// establish connection to express server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // to hit this route we do : http://127.0.0.1:3000/
  res.send('Hello Zain, Welcome!')
})

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})































// so much node modeules.. we will place it in gitignore