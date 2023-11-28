const { model, Schema } = require("mongoose");

const assetSchema = new Schema({
    "productName": {
        type: String,

    },
    "productType": {
        type: String,

    },
    "quantity": {
        type: Number,

    },
    "date": {
        type: String,

    },
    "email": {
        type: String,
    }
});

const assetsAdmin = model('assetsAdmin', assetSchema);
module.exports = assetsAdmin;