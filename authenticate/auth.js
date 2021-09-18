const jwt= require("jsonwebtoken")

function authenticate(req,res,next){
    
    const token = req.headers['auth']
    
    if(token==null) res.sendStatus(400)
    let decode=jwt.verify(token,'thisisthesecretkey');
    req.body.decode=decode;
    jwt.verify(token,'thisisthesecretkey',(err,user)=>{
        if(err) res.sendStatus(400)
        else{
            
            next();
        }
        
    })
}
module.exports={authenticate};