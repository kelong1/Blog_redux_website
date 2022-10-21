import axios from "axios"

const API="http://localhost:9000/app/blogs/"

const addBlog=async(blogData,token)=>{

    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.post(API+"addBlog",blogData,config)

    if(response.data){
        localStorage.setItem('blog',JSON.stringify(response.data))
    }

    return response.data
}
const getBlogs=async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(API+"getBlogs",config)

    return response.data
}
const deleteBlog=async(id,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.delete(API+id,config)

    return response.data
}



const blogService={
    addBlog,
    getBlogs,
    deleteBlog
    
}
export default  blogService