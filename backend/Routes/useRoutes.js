const express=require("express");
const router=express.Router();
const userSchema=require("../Models/userModel")


router.post("/addBlog",async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const user =await  userSchema.create({
            name,
            email,
            password
        })
        res.status(200).json(user)
        
    } catch (error) {
        console.error(error)
    }
})

module.exports=router;
