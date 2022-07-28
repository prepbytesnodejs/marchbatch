const express=require("express");
const signupusers = require("../db");
const encryptPassword = require("../middlewares/encryptpasswordmiddleware");
const router=express.Router();
const {log,log2,routeLog}=require("../middlewares/middleware");


// routes level middleware


//authentication hashing password 
//deploying app on heroku 
//crud operation


//router.use(routeLog);



//POST ROUTE
router.post("/signup",encryptPassword,function(req,res){

  signupusers.push(req.body);
  res.json({
    message:"Hey you are registered",
    hashedPAssword:req.body.password  //hashsed password recevd from middleware
  });
})

//GET ROUTE

router.get("/data",function(req,res){


  res.json({
    message:"success",
    data:signup
  });
})



// route level middleware
//root route of auth router
router.get("/",log,log2,function(req,res){
    res.send("I am coming from route");
})

router.get("/data",function(req,res,next){
  //  next();
    res.status(500).send("I am coming from  data route file ");
})


//http status codes

module.exports=router;