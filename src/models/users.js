const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    'name':{
        type:String ,
        required: true
    },
    "companyName":{
        type:String ,
        required: true
    },
    "companyLogo":{
        type:String ,
        required: true
    },
    "email":{
        type:String ,
        required: true
    },
    "birthDate":{
        type:String ,
        required: true
    },
    "package":{
        type:String ,
        required: true
    },
    "price":{
        type:Number ,
        required: true
    },
    "role":{
        type:Number ,
        required: true
    },
    
  });

  const users = model('users', userSchema)
  module.exports = users