const mongoose=require("mongoose");

const Schema=mongoose.Schema

const blogModel=new Schema({

    title:{
        type:String,
        required:[true,"please add a title"]
    },
    category:{
        type:String,
        required:[true,"please add a category"]
    },
    Blog:{
        type:String,
        required:[true,"please add a Blog"]
    }
    
},{
    timestamps:true
})

module.exports=mongoose.model("article",blogModel)