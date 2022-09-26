const express=require("express");
const app=express()

const cors=require("cors")
const mongoose=require("mongoose")
const dotenv=require("dotenv");

const RouteUrls=require("./Routes/useRoutes")

dotenv.config()

mongoose.connect(process.env.DATABASE,{useUnnifiedTopology:true,useNewUrlParser:true},()=>console.log("database connected"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/app",RouteUrls)
app.listen(process.env.PORT,()=>console.log(`port is running at ${process.env.PORT}`));