import axios from "axios"

const API="http://localhost:9000/app/blogs/"

const addBlog=async(blogData)=>{
    const response=await axios.post(API+"addBlog",blogData)

    if(response.data){
        localStorage.setItem('blog',JSON.stringify(response.data))
    }

    return response.data
}



const blogService={
    addBlog
    
}
export default  blogService