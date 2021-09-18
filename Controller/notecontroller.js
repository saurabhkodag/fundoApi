const { UserModel } = require("../app/model/model");
const Note = require("../app/model/notemodel")
const log=require("../logger/logger");
const User = require("../app/model/model");
const m=require("../Controller/mailer")
const login=require("../app/model/loginmodel")
let resp={
    "success":true,
    "message":"",
    "data":"",
    "status":""
}
let notesControl = {
    async add(request, response){
        const aNote = new Note({
            title: request.body.title,
            description: request.body.description
        })

        if(request.body.isPinned != null){
            aNote.isPinned = request.body.isPinned
        }

        if(request.body.isArchived != null){
            aNote.isArchived = request.body.isArchived
        }

        if(request.body.isDeleted != null){
            aNote.isDeleted = request.body.isDeleted
        }
        if(request.body.color != null){
            aNote.color = request.body.color
        }
            aNote.user_id=request.body.decode._id;    
        try{
            const newNote = await aNote.save()
            resp.status=200,
            resp.message="note add successfull",
            resp.success=true;
            log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
            response.status(201).json(newNote)
        } catch (err) {
            resp.status=400,
            resp.message="note add unsuccessfull",
            resp.success=true;
            log.log('error',`${resp.message}) status:${resp.status} success:${resp.success}`);
            response.status(400).json({ message: err.message })
        }
    },
    async getAllUsers(req, res) {
        //pm.request.headers.add({key: 'header_name', value: 'header_value' })
        
        try {
            const allUsers = await User.User.find();
            console.log(allUsers);
            return res.status(200).json(allUsers);
          } catch (error) {
            return res.status(500).json({ message: error.messages });
          }
    },
    async userdel(req,res){
        
        try{
        console.log(req.body.id);
        let user= await User.User.find(req.body.id);
        await user.remove();
        return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: error.messages });
        }
    },
    async get(request, response){
        try{
            const allNotes = await Note.find()
            resp.status=200,
            resp.message="note get successfull",
            resp.success=true;
            log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
            response.status(200).json(allNotes)
        } catch(err) {
            resp.status=400,
            resp.message="note get unsuccessfull",
            resp.success=true;
            log.log('error',`${resp.message}) status:${resp.status} success:${resp.success}`);
            response.status(400).json({ message: err.message })
        }
    },

    async del(req,res){
         try{
            await Note.updateOne({title:req.body.title}, { isDeleted: true });
            resp.status=200,
            resp.message="note delete successfull",
            resp.success=true;
            log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
            
            
        } catch(err){
            resp.status=400,
            resp.message="note delete unsuccessfull",
            resp.success=false;
            log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
            return res.status(400).json({ message: err.messages });            
        }
    },
    async arc(req,res){
        try{
           await Note.updateOne({title:req.body.title}, { isArchived: true });
           resp.status=200,
           resp.message="note Archived successfull",
           resp.success=true;
           log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
           
          
       } catch(err){
        resp.status=400,
        resp.message="note delete unsuccessfull",
        resp.success=false;
        log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
        return res.status(400).json({ message: err.messages });            
       }
   },
   async reset_user(req,res){
    let temp= await login.find({email:req.body.email});
    console.log(temp[0].token);
    if(temp.length!=0){
    let token=temp[0].token;
    console.log('token',temp[0]);
     m.sendM(temp,token);
    }
    else{
        resp.status=400,
        resp.message="user not found",
        resp.success=false;
        log.log('info',`${resp.message}) status:${resp.status} success:${resp.success}`);
        return res.status(400).json({ message: err.messages });
    }
    },
    async archivedShows(req,res){
        let temp= await Note.find({user_id:req.body.decode._id,isArchived:true});
        console.log(temp);
        if(temp.length!=0){
            return res.status(200).json(temp);
        }
        else{
            return res.status(400).json('isArchived not found')
        }
    },
    async deleteShows(req,res){
        let temp= await Note.find({isDeleted:true});
        console.log(temp);
        if(temp.length!=0){
            return res.status(200).json(temp);
        }
        else{
            return res.status(400).json('isArchived not found')
        }
    },
    async reset_pass(req,res){
        const token=req.headers['auth']
        console.log(req.body.decode._id);
        if(token==null)return res.sendStatus(400)
        else{
            console.log(req.body.decode);
            let find=await User.User.updateOne({_id:req.body.decode._id}, { password: req.body.password });
            console.log(find);
            return res.status(200).json(find);
        }
    }
    
    
}

module.exports = notesControl