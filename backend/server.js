const express=require("express");
const app=express()

const cors=require("cors")

const mongoose=require("mongoose")
const dotenv=require("dotenv");

const RouteUrls=require("./Routes/useRoutes")
const Blogs=require("./Routes/BlogRoutes")

dotenv.config()

app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use(cors())

app.use("/app/users",RouteUrls)
app.use("/app/blogs",Blogs)

mongoose.connect(process.env.DATABASE)
.then(()=>{
    app.listen(process.env.PORT,()=>{console.log(" database connected and listening on port 6000")})
})
.catch((err)=>{
    console.error(err)
})