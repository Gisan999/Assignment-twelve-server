const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    'name':{
        type:String ,
        
    },
    "companyName":{
        type:String ,
     
    },
    "companyLogo":{
        type:String ,
     
    },
    "email":{
        type:String ,
  
    },
    "birthDate":{
        type:String ,
  
    },
    "package":{
        type:String ,
 
    },
    "price":{
        type:Number ,
   
    },
    "role":{
        type:String ,
    
    },
    "team":{
        type:String ,
    
    },
    "image":{
        type:String ,
    
    },
    
  });

  const users = model('users', userSchema)
  module.exports = users