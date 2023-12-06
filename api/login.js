let jwt = require('jsonwebtoken');

class AuthHandler{
    
    constructor(){
        console.error(process.env.SECRET_KEY);
        this.key=process.env.SECRET_KEY
    }
    //TODO
    // 
    login(req,res){
        console.error(this?.key);
        console.error('req',req.body);
    }

}

const loginHandler = new AuthHandler()

module.exports = loginHandler