
const blogModel=require("../Models/blogModel")
const bloguser=require("../Models/userModel")



const addBlog=async(req,res)=>{
    const{title,category,Blog}=req.body
    try {
        if(!title||!category||!Blog){
            res.status(400)
            throw new Error(" Please add all fields")
        }
        const article=await blogModel.create({
         
            title,
            category,
            Blog
        })
        if(article){
            res.status(200).json(article)
                
            
        }else{
            res.status(400)
            throw new Error("Something went wrong")
        }
    } catch (error) {
        console.error(error)
    }

}
const getBlogs=async(req,res)=>{
    const articles=await blogModel.find()

   res.status(200).json(articles)
}
const getMyBlogs=async(req,res)=>{
    const articles=await blogModel.find({user:req.user.id})

   res.status(200).json(articles)
}
const deleteBlog=async(req,res)=>{
    const article = await blogModel.findById(req.params.id)

    if (!article) {
      res.status(400)
      throw new Error('article not found')
    }
  
    await article.remove()
  
    res.status(200).json({id: req.params.id})
}
const updateBlog=async(req,res)=>{
    // const article=await blogModel.findById(req.params.id)

    // if(!article){
    //     res.status(400)
    //     throw new Error('article not found')
    // }
   

    // const updatedArticle=await blogModel.findByIdAndUpdate(req.params.id,req.body,{
    //     new:true,
    // })
    // res.status(200).json(updatedArticle)
}


module.exports={
    addBlog,
    getBlogs,
    getMyBlogs,
    deleteBlog,
    updateBlog
}