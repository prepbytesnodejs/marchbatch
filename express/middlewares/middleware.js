function log(req,res,next){

    console.log("midleware hit");

    //either you can send response from here directly
    //next is used to call the next function (middleware) in pipeline
   // res.send("The cycle is over");

   next();

}

function log2(req,res,next){

    console.log("A log 2 functioni");
   // res.send("bye bye");
   next();
}

function routeLog(req,res,next){

    console.log("I am a route level midleware");
    //res.send("tata");
    next();

}

function appLevelMiddleware(req,res,next){
    console.log("I am app level mi leeward 😉 ")

    next();

}


module.exports={
    log,
    log2,
    routeLog,
    appLevelMiddleware
}