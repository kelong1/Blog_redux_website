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

router.post("/addBlog",protect,addBlog)
router.get("/getBlogs",protect,getBlogs)
router.get("/getMyBlogs",protect,getMyBlogs)
router.delete('/:id',protect,deleteBlog)
router.put('/:id',protect,updateBlog)


module.exports=router