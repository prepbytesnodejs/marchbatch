const express=require("express");
const router=express.Router();
const {log,log2,routeLog}=require("../middlewares/middleware");

// routes level middleware


//authentication hashing password 
//deploying app on heroku 
//crud operation


router.use(routeLog);



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