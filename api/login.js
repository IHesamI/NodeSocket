const orm = require('../dataBaseHandler/orm');
let jwt = require('jsonwebtoken');
const ormHandler= require('../dataBaseHandler/orm');
const db=new ormHandler();
function AuthHandler(){
    const orm=new ormHandler();
    const key=process.env.SECRET_KEY;
    async function login(req,res){
        let body = req.body;
        const userToken=body?.token
        let token=jwt.sign(body,key);
        const user = await orm.getUser(body.email,body.password);
        if (user){
            res.send({'jwt':token,'status':'200' , user})
        }
        else{
            res.send({'status':'401'});
        }
    }

    return{
        login,
    }

}

const loginHandler = AuthHandler()

module.exports = loginHandler