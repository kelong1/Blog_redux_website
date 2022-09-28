const express=require("express");
const app=express()



const mongoose=require("mongoose")
const dotenv=require("dotenv");

const RouteUrls=require("./Routes/useRoutes")

dotenv.config()

app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


app.use("/app",RouteUrls)

mongoose.connect(process.env.DATABASE)
.then(()=>{
    app.listen(process.env.PORT,()=>{console.log(" database connected and listening on port 6000")})
})
.catch((err)=>{
    console.error(err)
})