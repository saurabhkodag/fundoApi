const model = require("../app/model/loginmodel");
const User = require("../app/model/model");
const log=require("../logger/logger");
const newmodel=model.User;
let resp={
    "success":true,
    "message":"",
    "data":"",
    "status":""
}
class Service{
    
    async loginUser(res,req,obj){
        
        let newuser=new newmodel({
            "email":obj.email,
            "password":obj.password,

        });
        let e=newuser.email;
        let p=newuser.password;
    
        let temp= await User.User.find(obj);
        if(temp.length!=0){
            resp.status=200,
            resp.message="user found successfull",
            resp.success=true;
            console.log("User found",temp);
            log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
            return res.status(200).json(user)
        }
        else{
            resp.status=400,
            resp.message="user not found",
            resp.success=false;
            log.log('error',`${resp.message}) status:${resp.status} success:${resp.success}`);
        }
    }
}
module.exports = new Service();