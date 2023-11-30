const { Schema, model } = require("mongoose");

const requestSchema = new Schema({
    'additional':{
        type:String ,
    },
    "requestDate":{
        type:String ,
    },
    "requesterName":{
        type:String ,
    },
    "requesterEmail":{
        type:String ,
    },
    "productName":{
        type:String ,
    },
    "productType":{
        type:String ,
    },
    
  });
  const assetRequest = model('assetRequest', requestSchema)
  module.exports = assetRequest