const users = require('../model/adminschema')

exports.adminlogin=async(req,res)=>{
       const {email,password}= req.body 
       try  {
              const adminlog = await users.findOne({email,password})
              if(adminlog){
                   
                     res.status(200).json(adminlog)
                     console.log('login successfull')
                    
              }else{
                     res.status(406).json('incorrect email or password')
                     
              }
              
       } catch (error) {
              res.status(401).json(`login failed due to ${error}`)
       }
}