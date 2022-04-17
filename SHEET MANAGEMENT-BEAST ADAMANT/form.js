const { truncate } = require("fs");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    size : {
        type:String,
        required:true
    },

    gct : {
        type:String,
    },

    ht : {
        type:String,
    },

    station : {
        type:String,
        default:'none',
    },
})

const user = mongoose.model('sheets', employeeSchema)
module.exports = user;