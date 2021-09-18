const model = require("../app/model/model");
const log=require("../logger/logger");
const UserModel=new model.UserModel;
const newmodel=model.User;
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

let resp={
    "success":true,
    "message":"",
    "data":"",
    "status":""
}
class Service{
    
    async registerUser(obj){
        console.log(obj.password);
        const myPlaintextPassword=obj.password;
        const saltRounds=10;
        // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        //     console.log(hash)
        //     console.log(err);
        // });
        let pass= await bcrypt.hash(obj.password,10);
        console.log(pass);
        //var token = jwt.sign({ _id: obj.email }, 'thisisthesecretkey');
        let newuser=new newmodel({
          //  "token":token,
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