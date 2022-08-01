//Db service
const { v4: uuidv4 } = require('uuid');

let  signupusers=[

];


const searchByEmail=(email)=>{
    const isthere=signupusers.filter(function(ele){
        return email==ele.email;

    })
return isthere.length>0;

}


const addDataToDb=(data)=>{
    data.id=uuidv4();

    signupusers.push(data);

}

const getDataFromDb=()=>{

    return signupusers;

}


const updateDataIndb=(data)=>{
    //  Logic for updation --->
    signupusers=signupusers.filter(ele=>ele.id!=data.id) ; 
    signupusers.push(data);  
    
    
}


const deleteDataInDb=(id)=>{
    ///logic 
    //send me the logic to remove an object from an array on the basis of id//
    /**
     * 
     * [
        {
            "name": "Sanjay dutt",
            "email": "autobotsdixit786@gmail.com",
            "id": "d2391b26-0c82-490f-b8af-3ea6dbde973a"
        },
        {
            "name": "Sanjay dut",
            "email": "shubhamdixit@yopmail.com",
            "id": "7bcdf3f7-593a-4159-b6da-902ad67b207b"
        }
    ]
     */

signupusers=signupusers.filter(ele=>ele.id!=id) ;   

}



module.exports={
    addDataToDb,
    getDataFromDb,
    updateDataIndb,
    deleteDataInDb,
    searchByEmail


};