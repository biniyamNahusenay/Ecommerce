const mongoose = require("mongoose");

const SchemaUser = mongoose.Schema({
    firstName:{
       type:String,
       required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
       required:true,
       unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
     image:{
        type:String,
     }
})

module.exports = mongoose.model('purchase',SchemaUser)