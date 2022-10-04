import React from 'react'
import { deleteBlog } from '../features/Blogs/blogSlice'
import{useDispatch} from "react-redux"

function ViewBlogs({blog}) {
  const dispatch=useDispatch()
  return (
    <div className='BlogCard'>
        <div>
            {new Date(blog.createdAt).toLocaleString("en-US")}
        </div>
        <h3>{blog.title}</h3>
        <h3>{blog.category}</h3>
        <p>{blog.Blog}</p>
        <button onClick={()=>dispatch(deleteBlog(blog._id))}>Delete</button>
        <button>update</button>
    </div>
  )
}

export default ViewBlogs