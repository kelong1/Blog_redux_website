const express=require("express");
const router=express.Router();
const userSchema=require("../Models/userModel.js")

router.post("/addBlog",async(req,res)=>{
  const {name,email,password}=req.body
    const Bloguser=await userSchema({
        name,
        email,
        password,
    })
    Bloguser
    .save()
    .then((res)=>{
        res.status(201).json(res.data)
          
    })
    .catch((err)=>{
        console.error(err)
    })

})

module.exports=router;
