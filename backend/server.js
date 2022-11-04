const path=require("path")

const express=require("express");
const app=express()

const cors=require("cors")

const mongoose=require("mongoose")
const dotenv=require("dotenv");

const RouteUrls=require("./Routes/useRoutes")
const Blogs=require("./Routes/BlogRoutes")

dotenv.config()
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true},()=>console.log("database is connected"))

app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use(cors())

app.use("/app/users",RouteUrls)
app.use("/app/blogs",Blogs)

app.listen(process.env.PORT,()=>{console.log(" database connected and listening on port 6000")})
// mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>{
//     app.listen(process.env.PORT,()=>{console.log(" database connected and listening on port 6000")})
// })
// .catch((err)=>{
//     console.error(err)
// })
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} 