const User = require("../app/model/model") 
const service = require("../service/loginservice");
const UserMod= new User.UserModel;
class Login{
    async login(req,res){
        console.log("Inside login");
        // await service.loginUser(req.body)
        await service.loginUser(req.body);
        
    //     .then((result)=>{
    //         console.log("Inside successfull register",result);

    // .catch((err)=>{
    //     console.log("Inside successfull register");
    // })
}
async password(req,res){
    console.log("Inside password");
        await UserMod.updatePassword(req.body);
}
async forgetpassword(req,res){
    console.log("Inside password");
        await service.forget_Password(req.body);
}
}
module.exports=new Login();