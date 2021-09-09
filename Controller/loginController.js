const User = require("../app/model/model") 
const service = require("../service/loginservice");
const log=require("../logger/logger");
const UserMod= new User.UserModel;
let resp={
    "success":true,
    "message":"",
    "data":"",
    "status":""
}
class Login{
    async login(req,res){
        console.log("Inside login");
        let temp= await User.User.find({email:req.body.email,password:req.body.password});
        if(temp.length!=0){
            resp.status=200,
            resp.message="user found successfull",
            resp.success=true;
            console.log("User found",temp);
            log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
            return res.status(200).json(temp);
        }
        else{
            resp.status=400,
            resp.message="user not found",
            resp.success=false;
            log.log('error',`${resp.message}) status:${resp.status} success:${resp.success}`);
            return res.status(400).json({message:"User not found"});
        }
        // await service.loginUser(req.body)
        //await service.loginUser(req.body);
        
    //     .then((result)=>{
    //         console.log("Inside successfull register",result);

    // .catch((err)=>{
    //     console.log("Inside successfull register");
    // })
}

}
module.exports=new Login();