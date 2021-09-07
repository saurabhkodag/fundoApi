const {check}=require('express-validator/check');
exports.createUser=(method)=>{
    switch(method){
        case 'create':{
return[
    check('firstName')
    .not().isEmpty()
    .withMessage("Firstname is required")
    .isAlpha()
    .withMessage("Must be alphabetic")
    .isLength({min:3})
    .withMessage('Min 3 alphabet'),

    check('lastName')
    .not().isEmpty()
    .withMessage("Firstname is required")
    .isAlpha()
    .withMessage("Must be alphabetic")
    .isLength({min:3})
    .withMessage('Min 3 alphabet'),

    check('email').isEmail()
    .not().isEmpty()
    .withMessage("Email is required")
    .withMessage('Email is not valid'),

    check('password')
    .not().isEmpty()
    .withMessage("Password is required")
    .isLength({min:3})
    .withMessage('minimum 3 length password'),

    check('service')
    .not().isEmpty()
    .withMessage("service is required")

]
}
}
}
