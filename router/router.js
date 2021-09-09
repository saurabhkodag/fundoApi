const express=require("express");
const router=express.Router();
const controller=require("../Controller/userController");
 const logincontroller=require("../Controller/loginController");
 const ncontroller=require("../Controller/notecontroller")
const validator=require('../Controller/validator');
console.log("inside router");
 
    router.post("/register",validator.createUser("create"),controller.Register);
    router.post("/login",logincontroller.login);
    router.get('/',ncontroller.getAllUsers);
   router.post("/noteadd",ncontroller.add);
   router.get("/noteget",ncontroller.get);
   router.delete("/del",ncontroller.userdel);
    router.post("/notedelete",ncontroller.del)
module.exports = router;