const project = require('../model/projectschema')
const lap= require('../model/laptopschema')

exports.adddata= async(req,res)=>{
       console.log("inside project controller");


       

  

       const {name,os,price,imgsrc,camera,software,entertainment,battery,performance,build,link} = req.body 
       console.log(`${name},${os},${price},${imgsrc},${camera},${software},${entertainment},${battery},${performance},${build},${link}`);


      try {
       const ExisitngUser = await project.findOne({name})
       if(ExisitngUser){
              res.status(406).json("project already existed")
       }else{
              const nProject = new project({
                     name,
                     os,
                     price,
                     imgsrc,
                     camera,
                     software,
                     entertainment,
                     battery,
                     performance,
                     build,
                     link

              })
              await nProject.save()
              res.status(200).json(nProject)
       }

      } catch (err) {
       res.json(401).json(`request failed due to ${err}`)
      }





}

//to get project data 
exports.getdata= async(req,res)=>{
       try{
              const sdata = await project.find()
              res.status(200).json(sdata)
       } catch(err){
              res.status(401).json(`request failed due to ${err}`)
       }
}

exports.addlaptopdata= async(req,res)=>{
       console.log("inside project controller");


       const {name,os,price,imgsrc,entertainment,battery,performance,build,link} = req.body 
       console.log(`${name},${os},${price},${imgsrc},${entertainment},${battery},${performance},${build},${link}`);


      try {
       const ExisitngUser = await lap.findOne({name})
       if(ExisitngUser){
              res.status(406).json("project already existed")
       }else{
              const nProject = new lap({
                     name,
                     os,
                     price,
                     imgsrc,
                     entertainment,
                     battery,
                     performance,
                     build,
                     link

              })
              await nProject.save()
              res.status(200).json(nProject)
       }

      } catch (err) {
       res.json(401).json(`request failed due to ${err}`)
      }
}


exports.getlapdata= async(req,res)=>{
       try{
              const sdata = await lap.find()
              res.status(200).json(sdata)
       } catch(err){
              res.status(401).json(`request failed due to ${err}`)
       }
}

exports.deltesmartphonedata = async(req,res)=>{
       const { id } = req.params;
       try {
              const removeProject = await project.findByIdAndDelete({_id: id })
              res.status(200).json(removeProject)
              
       } catch (err) {
              res.status(401).json(err)
              
       }
}

exports.deltelapdata = async(req,res)=>{
       const { id } = req.params;
       try {
              const removeProject = await lap.findByIdAndDelete({_id: id })
              res.status(200).json(removeProject)
              
       } catch (err) {
              res.status(401).json(err)
              
       }
}



