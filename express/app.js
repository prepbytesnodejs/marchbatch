// express is a node js frameowrk for creating http servers

const express=require("express");// requiring th express module
const app=express();  // creating app object by calling the express function 

app.get("/",function(req,res){

    //res.send() //res.render // res.json() //res.sendFile();
   // res.send("hello people"); // res.write or res.end 
   //res.write("hey");res.end();
   res.send({
    message:"HEllo people"
   })

})



app.get("/data",function(req,res){

    //res.send() //res.render // res.json() //res.sendFile();
   // res.send("hello people"); // res.write or res.end 
   //res.write("hey");res.end();
   res.send({
    message:"Data people"
   })

})




app.listen(9090,function(){
    console.log("Server Started");
})
