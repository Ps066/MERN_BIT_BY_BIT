// import mongoose
const mongoose = require('mongoose');


// create user schema
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})


// export the modules
module.exports = mongoose.model("Users",userSchema);
// the above export is not a named export 