const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION 

mongoose.connect(connection_string).then((res)=>{
       console.log("connected to the mongodb");
}).catch((err)=>{
       console.log(err);
})