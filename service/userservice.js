const model = require("../app/model/model");
const log=require("../logger/logger");
const UserModel=new model.UserModel;
const newmodel=model.User;
let resp={
    "success":true,
    "message":"",
    "data":"",
    "status":""
}
class Service{
    
    async registerUser(obj){
        let newuser=new newmodel({
            "firstName":obj.firstName,
            "lastName":obj.lastName,
            "email":obj.email,
            "service":obj.service,
            "password":obj.password,

        });
        resp.status=200,
        resp.message="user created successfull",
        resp.success=true;
        log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
        let saveddata=await UserModel.RegisterUser(newuser);
        return saveddata;
    }
}
module.exports = new Service();