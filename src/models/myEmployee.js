const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
    'name':{
        type:String
    },
    'image':{
        type:String
    },
    'role':{
        type:String
    }
})

const myEmployeeList = model('myEmployeeList', employeeSchema)
module.exports = myEmployeeList;