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
});
let User = mongoose.model('test',userSchema);
module.exports={User};