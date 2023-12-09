const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.json({
        status:"SUCCESS",
        message:"All Good"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`server running on localhost:${process.env.PORT}`)
})