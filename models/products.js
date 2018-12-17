var db=require('../dbconnection');
var prod={

    getAllProd:function(callback){
    return db.query("Select * from products",callback);
    
    },
    getProdById:function(pid,callback){
    
        return db.query("select * from products where pid=?",[pid],callback);
    },

    addProd:function(prod,callback){
       console.log("Inside ADD function");
       
    return db.query("Insert into products values(?,?,?,?)",[prod.pid,prod.pname,prod.pcost,prod.email],callback);
   
    },
    deleteProd:function(pid,callback){
        return db.query("delete from products where pid=?",[pid],callback);
    },
    updateProd:function(pid,prod,callback){
        return  db.query("update products set pname=?,pcost=?,email=? where pid=?",[prod.pname,prod.pcost,prod.email,pid],callback);
    }
    
    };
module.exports=prod;