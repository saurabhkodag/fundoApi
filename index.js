
const express=require('express');
const expressValidator=require('express-validator');
const bodyParser = require('body-parser')
// var body_parser=require('body-parser');
var mongoose = require('mongoose');
var router=require("./router/router")
var app = express();
app.use(express.json());
app.use(expressValidator());
app.use("/",router);


var config = require('./config/config')
app.listen("3200",(err)=>{
    console.log("app is listening at port 32000 yes");
});
mongoose.connect("mongodb://localhost:27017/Person",(err)=>{
    if(err){
        console.log("db not connected");
    }
    else{
        console.log("Db connected");
    }
});
