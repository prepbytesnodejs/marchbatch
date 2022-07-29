const {addDataToDb,getDataFromDb,deleteDataInDb}=require("../db");

const createData=(req,res)=>{
    // Out business logic will go in here

    addDataToDb(req.body);

    res.json({
        message:"User Saved"
    })
}


const updateData=(req,res)=>{
    // Out business logic will go in here
}


const getData=(req,res)=>{
    // Out business logic will go in here
    const response=getDataFromDb();

    res.json({
        message:"Success",
        response
    })
}


const deleteData=(req,res)=>{
    const id=req.params.id;
    deleteDataInDb(id);
    // Out business logic will go in here
    res.json({
        message:"SuccessFully Deleted"
    })
}


module.exports={
    createData,
    getData,
    updateData,
    deleteData
}