const express = require('express');  //1
const router= require('./routes/routes')
const db= require('./models/db')
const app = express();  //2
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use('/api/tasks',router)
app.listen('8000',err=>{
    if (err) console.log(err)
    console.log("started")
})