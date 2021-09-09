const service = require("../service/userservice");
const log=require("../logger/logger");
const {validationResult}=require('express-validator/check');
class Registration{
    async Register(req,res){
        const error=validationResult(req);
        if(error.array().length){
            res.status(422).json({error:error.array()});
            return;
        }
        else{
        console.log("Inside register");
        await service.registerUser(req.body)
        .then((result)=>{
            res.status(200).json("successfull registered");
        })

    .catch((err)=>{
        res.status(400).json("unsuccessfull registered");
    });
}
}
}
module.exports=new Registration();