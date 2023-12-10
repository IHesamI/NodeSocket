
class OrmHandler{
    constructor(){
        if(!OrmHandler.instance){
            OrmHandler.instance=this
        }
        return OrmHandler.instance
    }
}

module.exports=OrmHandler;