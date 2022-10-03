const express=require("express");
const router=express.Router();
const {protect}=require("../middlewares/authMiddleware")

const {
    addBlog,
    getBlogs,
    getMyBlogs,
    deleteBlog,
    updateBlog
}=require("../Controllers/blogControllers")

router.post("/addBlog",addBlog)
router.get("/getBlogs",getBlogs)
router.get("/getMyBlogs",protect,getMyBlogs)
router.delete(":/id",deleteBlog)
router.put(":/id",protect,updateBlog)


module.exports=router