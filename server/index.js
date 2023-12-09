const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.get('/health',(req,res)=>{
    res.json({
        status:"Server is UP and Running",
        message:"All Good"
    })
})

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`server running on localhost:${process.env.PORT}`)
    })
    .catch((error)=>{
        console.log(error)
    })
})