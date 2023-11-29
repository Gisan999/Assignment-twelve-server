const { Schema, model } = require("mongoose");

const customRequestSchema = new Schema({

    'assetName': {
        type: String
    },
    'assetImage': {
        type: String
    },
    'assetType': {
        type: String
    },
    'date': {
        type: String
    },
    'information': {
        type: String
    },
    'needDescription': {
        type: String
    },
    'price': {
        type: String
    },
    'userName': {
        type: String
    },
    'userImage': {
        type: String
    },
    'adminEmail': {
        type: String
    },

})

const customRequest = model('customRequest', customRequestSchema);
module.exports = customRequest;
