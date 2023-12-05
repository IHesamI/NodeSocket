class AuthHandler{
    constructor(){

    }
    login(req,res){
        console.error('req',typeof req);
        res.send('<p>hello</p>')
    }

}

const loginHandler = new AuthHandler()

module.exports = loginHandler