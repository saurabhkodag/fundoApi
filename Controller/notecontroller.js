const { UserModel } = require("../app/model/model");
const Note = require("../app/model/notemodel")
const log=require("../logger/logger");
const User = require("../app/model/model");
const DEFAULT_LOG_STRING = `${new Date().toLocaleString()}: `
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
        let user=User.User.find(req.body.id);
        user.remove();
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
        // try{
            console.log(req.body._id,"hii");
            let user = await Note.findById(req.body._id);
             console.log(user,"hii");
            const nodedel= Note.updateOne({title:user.title}, { isDeleted: true });
            // console.log(nodedel);
            res.status(200).json("updates successfull");
        // } catch(err){
        //     return res.status(400).json({ message: err.messages });            
        // }

    }
}

module.exports = notesControl