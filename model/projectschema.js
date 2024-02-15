const mongoose =  require('mongoose'); 

const projectSchema = mongoose.Schema({
       name:{
              type:String,
              require:true
       },
       os:{
              type:String,
              require:true
       },
       imgsrc:{
              type:String,
              require:true
       },
       price:{
              type:String,
              require:true
       },
       camera:{
              type:String,
              require:true
       },
       software:{
              type:String,
              require:true
       },
       
       entertainment:{
              type:String,
              require:true
       },
       battery:{
              type:String,
              require:true
       },
       performance:{
              type:String,
              require:true
       },
       build:{
              type:String,
              require:true
       },
       link:{
              type:String,
              require:true
       }
})


const smartphones = mongoose.model('smartphones',projectSchema)

module.exports = smartphones


