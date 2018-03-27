const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Endpoints
app.get('/api/tasks',(req, res, next)=>{
    console.log('endpoint hit', res.data)
    res.status(200).json('hello')
})

const port = 3010

app.listen(port, ()=>{console.log('running on port: '+ port)})