const mongoose =  require('mongoose'); 


const useremailschema = mongoose.Schema({
       email:{
              type:String,
              require:true
       }
})

const useremail = mongoose.model('useremail',useremailschema)
module.exports=useremail;
