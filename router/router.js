const express=require("express");
const router=express.Router();
const controller=require("../Controller/userController");
 const logincontroller=require("../Controller/loginController");
const validator=require('../Controller/validator');
console.log("inside router");
 
// router.post("/register",validator.createUser("create"),controller.Register);
//  router.post("/login",logincontroller.login);
 router.post("/updatepassword",logincontroller.password);
// router.post("/forgetpassword",logincontroller.forgetpassword);
module.exports = router;