const { PrismaClient } = require("@prisma/client")
const prisma=new PrismaClient();
class OrmHandler{
    constructor(){
        if(!OrmHandler.instance){
            OrmHandler.instance=this
        }
        return OrmHandler.instance
    }
   async getUser(email,password){
        const user= await prisma.user.findFirst({
            where:{email , password}
        })

        return user;
    }
}

module.exports=OrmHandler;