const mongoose = require('mongoose')

let adminSchema= new mongoose.Schema({
       id:{type:Number },
       name:{type:String,require:true},
       email:{ type: String, required: true},
       password:{ type:String ,required :true}  
})

const users = mongoose.model('users',adminSchema)

module.exports = users