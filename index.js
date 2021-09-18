const log=require("./logger/logger");
const express=require('express');
const expressValidator=require('express-validator');
const bodyParser = require('body-parser')
// var body_parser=require('body-parser');
var mongoose = require('mongoose');
var router=require("./router/router");
var app = express();
const swaggerUi=require('swagger-ui-express');
const YAML=require('yamljs');
const swaggerDocument=YAML.load('./swagger.yaml');
app.use(express.json());
app.use(expressValidator());
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
// log.log('info',"user found successfull");
var config = require('./config/config')
app.listen("3200",(err)=>{
    console.log("app is listening at port 32000 yes");
});
app.use("/",router);
mongoose.connect("mongodb://localhost:27017/Person",(err)=>{
    if(err){
        
            log.log('error',"connected unsuccessfully");
    }
    else{
        console.log("DB connected");
        log.log('info',"DB connected");
    }
});
