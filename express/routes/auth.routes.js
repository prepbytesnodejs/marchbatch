const express=require("express");
const router=express.Router();


router.get("/",function(req,res){
    res.send("I am coming from route");
})

router.get("/data",function(req,res){
    res.send("I am coming from  data route file ");
})

module.exports=router;