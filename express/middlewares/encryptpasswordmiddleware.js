const bcrypt = require('bcrypt');

//This function encrypts the passwords

function encryptPassword(req,res,next){
    const myPlaintextPassword=req.body.password;


    bcrypt.hash(myPlaintextPassword, 10, function(err, hash) { //Error first callback
        if(!err){ //null and undefined are treated as false in js
            req.body.password=hash;

            next();
            return;  //function execution always stops when it encounters the return statement
        }
        else{
            console.log(err);
        }


        res.send("Error Occurredd");


       
     
    });

}

module.exports=encryptPassword;