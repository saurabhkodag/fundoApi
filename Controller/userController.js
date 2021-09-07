const service = require("../service/userservice");
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
            console.log("Inside successfull register",result);
        })

    .catch((err)=>{
        console.log("Inside successfull register");
    });
}
}
}
module.exports=new Registration();