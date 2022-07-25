// express is a node js frameowrk for creating http servers

const express=require("express");// requiring th express module
const cors=require("cors");
const app=express();  // creating app object by calling the express function 
app.use(cors());//middlewARE

app.use(express.json());  //middleware
app.use(express.urlencoded({extended:true}));

const userdata=[];

app.get("/",function(req,res){

    //res.send() //res.render // res.json() //res.sendFile();
   // res.send("hello people"); // res.write or res.end 
   //res.write("hey");res.end();
   res.send({
    message:"Success",
    data:userdata
   })

})



app.get("/data",function(req,res){

    //res.send() //res.render // res.json() //res.sendFile();
   // res.send("hello people"); // res.write or res.end 
   //res.write("hey");res.end();
   res.send({
    message:"I am coming from backend............"
   })

})


// Post routes -->

app.post("/post",function(req,res){
    //the post request data that is sent by the client is available

    //console.log(req.body);
    console.log(req.query);

    userdata.push(req.body);




    res.send("post route");



})



// Get parameters 


app.get("/urldata",function(req,res){

    console.log(req.query); //it gives the query parameter from your url 
    

    //query parametrs
    //route params

    res.json({
        message:"Request Received"
    })

})

//route params
app.get("/url/:name/:id/:age",function(req,res){

    console.log(req.params.age);
    

    //query parametrs
    //route params

    res.json({
        message:"Request Received"
    })

})


app.listen(9090,function(){
    console.log("Server Started");
})
