const express=require("express");
const signupusers = require("../db");
var jwt = require('jsonwebtoken');




const router=express.Router();

//JWT --JSON WEB TOKEN

router.post("/login",function(req,res){
    console.log(signupusers);
    const email=req.body.email;

    const isthere=signupusers.filter(function(ele){
        return email==ele.email;

    })




    if(isthere.length>0){

        // generating a token and send to the client


    jwt.sign(isthere[0], "privateKey", function(err, token) {

        res.json({
            message:"Success",
            token:token
        })
       
      });

    

    }
    else{
        res.json({
            message:"User Not found"
        })
    }

    
})




module.exports=router;