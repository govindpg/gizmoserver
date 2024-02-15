require('dotenv').config()

const cors = require('cors')
const express = require('express')
require('./DB/connection')
const routes = require('./Routing/router')
const gizmoserver = express()

gizmoserver.use(cors())
gizmoserver.use(express.json())
gizmoserver.use(routes)

const PORT = 3001 || process.env


gizmoserver.listen(PORT,()=>{
       console.log("server is running");
})


gizmoserver.get('/',(req,res)=>{
       res.send('<h1>server is running successfully and ready to accept client request</h1>')
})