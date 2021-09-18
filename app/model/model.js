const moongose = require("mongoose");
const userSchema=new moongose.Schema({
    'firstName':{
        type:String,
        required :[true,"Firstname required"]
    },
    'lastName':{
        type:String,
        required :[true,"lasttname required"]
    },
    'email':{
        type:String,
        required :[true,"email required"]
    },
    'password':{
        type:String,
        required :[true,"password required"]
    },
    'service':{
        type:String,
        reqired :[true,"service required"]
    },
    'token': {
         type: String 
        }
    },{
    'timestamps':true

})

let User = moongose.model('testdb',userSchema);

class UserModel{
    constructor(){

    }
    async RegisterUser(req){
        let response={
            "success":true,
            "message":"",
            "data":"",
            "status":""
        }
        return new Promise((resolve,reject)=>{
            req.save().then((data)=>{
                console.log("inside model register")
                response.success=true,
                response.message="registerred successfully",
                response.data=data,
                response.status=200
                resolve({response})
            })
            .catch((err)=>{
                console.log("error in  register")
                response.success=false,
                response.message="registerred failed",
                response.data='',
                response.status=500
                reject({response})
            })
    })
}
async updatePassword(obj){
    console.log(obj.email);
    User.updateOne({"email":'soko@gmail.com'},
        {$set:{"password":'11'}})
        console.log("Inside Update_password");
}
}

 module.exports={UserModel,User};