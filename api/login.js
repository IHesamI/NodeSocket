let jwt = require('jsonwebtoken');

function AuthHandler(){
    const key=process.env.SECRET_KEY;
    function login(req,res){
        let body = req.body;
        let token=jwt.sign(body,key);

        res.send({'jwt':token,'status':'200'})
    }

    return{
        login,
    }

}

const loginHandler = AuthHandler()

module.exports = loginHandler