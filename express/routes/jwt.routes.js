const express=require("express");
const signupusers = require("../db");
var jwt = require('jsonwebtoken');
const {searchByEmail} =require("../db");




const router=express.Router();

//JWT --JSON WEB TOKEN

router.post("/login",function(req,res){
    console.log(signupusers);
    const email=req.body.email;


    const isthere=searchByEmail(email);
  



    if(isthere){

        // generating a token and send to the client


    jwt.sign(req.body, "privateKey", function(err, token) {

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