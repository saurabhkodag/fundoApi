const model = require("../app/model/model");
const UserModel=new model.UserModel;
const newmodel=model.User;
class Service{
    async registerUser(obj){
        // console.log('model',model.UserModel );
        // if(model.User.find({"email":"sourabh@gmail.co"}).count()>0){
        //     console.log("true");
        // }
        // else{
        //     console.log("flase");
        // }
        let newuser=new newmodel({
            "firstName":obj.firstName,
            "lastName":obj.lastName,
            "email":obj.email,
            "service":obj.service,
            "password":obj.password,

        });
        
        let saveddata=await UserModel.RegisterUser(newuser);
        return saveddata;
    }
}
module.exports = new Service();