const model = require("../app/model/loginmodel");
const User = require("../app/model/model");
// const UserModel=new model.UserModel;
const newmodel=model.User;
class Service{
    async loginUser(obj){
        // console.log('model',model.UserModel );
        // if(model.User.find({"email":"sourabh@gmail.co"}).count()>0){
        //     console.log("true");
        // }
        // else{
        //     console.log("flase");
        // }
        let newuser=new newmodel({
            "email":obj.email,
            "password":obj.password,

        });
        // console.log(newuser);
        let e=newuser.email;
        let p=newuser.password;
    
        let temp= await User.User.find(obj);
        if(temp.length!=0){
            console.log("User found",temp);
        }
        else{
            console.log("User not found");
        }
    }
    
    async forget_Password(obj){
        let temp=User.User.find(obj);
        console.log(temp.password);
    }
}
module.exports = new Service();