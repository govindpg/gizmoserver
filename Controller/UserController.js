const user = require('../model/useremailschema')

//get use4r email 
exports.adddatas= async(req,res)=>{


       const {email} = req.body 
       console.log(`${email}`);


      try {
       const ExisitngUser = await user.findOne({email})
       if(ExisitngUser){
              res.status(406).json("project already existed")
       }else{
              const nProject = new user({
                     email

              })
              await nProject.save()
              res.status(200).json(nProject)
       }

      } catch (err) {
       res.json(401).json(`request failed due to ${err}`)
      }





}

//to get user data 
exports.getuseremail= async(req,res)=>{
       try{
              const sdata = await user.find()
              res.status(200).json(sdata)
       } catch(err){
              res.status(401).json(`request failed due to ${err}`)
       }
}