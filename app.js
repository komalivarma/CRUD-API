var express = require('express');
var bodyParser = require('body-parser');
var prod=require('./models/products');
var validateReq = require('./models/validations');
const validator = require('express-joi-validation')({});
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next)
{
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "*");
next();
});

//==============API for Get AllProducts ================
app.get('/getProducts?',function(req,res,next){
    prod.getAllProd(function(err,rows){
        console.log(err +","+rows)
        //console.log(req.body);
        if(err)
        {
            console.log(err)
            res.json(err);
        }
        else{
            console.log(rows)
                res.json(rows);
        }
    });
});

//==============API for Get Product Based on ID================
app.get('/getProdByID/:pid',function(req,res,next){
    
    prod.getProdById(req.params.pid,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
                res.json(rows);
        }
    });
});

 //===========API for Insertion of product Records =====================
    app.post('/postProduct',validator.body(validateReq.addProductSchema),function(req,res,next){
    
            prod.addProd(req.body,function(err,count){
    
                
                if(err)
                {
                    res.json(err);
                }
                else{
                        res.json(req.body);
                }
            });
    });
   
    //================API for delete particular product =================
    app.delete('/delete/:pid',function(req,res,next){
    
            prod.deleteProd(req.params.pid,function(err,count){
    
                if(err)
                {
                   
                    res.send(" Not deleted")
                }
                else
                {

                    res.send("Deleted")
                }
    
            });
    });

    //===========API for updation of products based on ID ===================
    app.put('/updateProduct/:pid',function(req,res,next){
    
        prod.updateProd(req.params.pid,req.body,function(err,rows){
    
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });


app.listen(3000,()=>{
    console.log("listining on 3000");
});
