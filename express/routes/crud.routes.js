const { application } = require("express");
const express=require("express");
const router=express.Router();
const {createData,getData,updateData,deleteData}=require("../controllers/crud.controller");
const authorize=require("../middlewares/authorization.middleware");
//Create Route

router.post("/",createData);

router.get("/",authorize,getData);

router.put("/",updateData);

router.delete("/:id",deleteData);

module.exports=router;