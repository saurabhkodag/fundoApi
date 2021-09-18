const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    'email':{
        type:String,
        required :[true,"email required"]
    },
    'password':{
        type:String,
        required :[true,"password required"]
    },
    'token':{
        type:String,
        required :[true,"token required"]
    },
    'login_id':{
        type:String,
        required :[true,"login required"]
    }
});
module.exports= mongoose.model('test',userSchema);