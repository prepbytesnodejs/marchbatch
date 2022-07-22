function sum (a,b){
    return a+b;

}

let j=99;
class User{
    constructor(name){
        this.name=name;

    }

    getName(){
        return this.name;
    }

}

function subtract(r,k){
   return r-k;
}


const obj={
    User,
    subtract,
    sum,
    j
}


module.exports=obj;
//console.log(module);