const express=require("express");
const router=express.Router();
const controller=require("../Controller/userController");
 const logincontroller=require("../Controller/loginController");
 const ncontroller=require("../Controller/notecontroller")
const validator=require('../Controller/validator');
const v=require('../authenticate/auth')
console.log("inside router");
 
    router.post("/register",validator.createUser("create"),controller.Register);
   router.post("/login",logincontroller.login);
    router.post('/',v.authenticate,ncontroller.getAllUsers);
    router.post('/reset',v.authenticate,ncontroller.reset_user);
    router.post("/reset_password",v.authenticate,ncontroller.reset_pass)
   router.post("/noteadd",v.authenticate,ncontroller.add);
   router.get("/noteget",v.authenticate,ncontroller.get);
   router.delete("/del",v.authenticate,ncontroller.userdel);
    router.post("/notedelete",v.authenticate,ncontroller.del);
    router.post("/noteArchived",v.authenticate,ncontroller.arc)
    router.post("/archivedShow",v.authenticate,ncontroller.archivedShows)
    router.get("/deleteShow",v.authenticate,ncontroller.deleteShows)
    
module.exports = router;