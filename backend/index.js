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

app.use(express.json())
// Available Routes (getting routes from routes folder)
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
  console.log(`Your app running on port http://localhost:${port}`)
})


// first we made models and now we use them in routes




























// so much node modeules.. we will place it in gitignore