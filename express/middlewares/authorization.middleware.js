function authorize(req,res,next){
    console.log(req.headers);
    const token=req.headers.token;

 

    if(token!="null"){
        next();
    }

    else{
        res.status(401).send("NOt allowed")
    }


    // it will check for token 
    // if token present it will pass it to the controller
    // other wise it will send resposne to user
}

module.exports=authorize;