var db=require('../dbconnection');
var prod={

    getAllProd:function(callback){
        console.log("Retrieved Data Successfully");
    return db.query("Select * from products",callback);
    
    },
    getProdById:function(pid,callback){
        console.log("Retrieved Data Successfully");
        return db.query("select * from products where pid=?",[pid],callback);
    },

    addProd:function(prod,callback){
       console.log("Posted Data Successfully");
       
    return db.query("Insert into products values(?,?,?,?)",[prod.pid,prod.pname,prod.pcost,prod.email],callback);
   
    },
    deleteProd:function(pid,callback){
        console.log("Deleted Data Successfully");
        return db.query("delete from products where pid=?",[pid],callback);
    },
    updateProd:function(pid,prod,callback){
        console.log("Data updated Successfully");
        return  db.query("update products set pname=?,pcost=?,email=? where pid=?",[prod.pname,prod.pcost,prod.email,pid],callback);
    }
    
    };
module.exports=prod;