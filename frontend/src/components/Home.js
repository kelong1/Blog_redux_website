import React from 'react'
import { useEffect } from 'react'
import{useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import BlogForm from './BlogForm'
import ViewBlogs from './ViewBlogs'
import{getBlogs,reset} from "../features/Blogs/blogSlice"

export function Home() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const{user}=useSelector((state)=>state.auth)
  const {blogs,isError,message} =useSelector((state)=>state.blogs)

  useEffect(()=>{
    if(isError){
      console.log(message)
    }
      if(!user){
        navigate("/login")
      }
    dispatch(getBlogs())
    return () => {
      dispatch(reset())
    }
  },[user,isError,message,dispatch,navigate])
  return (
    <div>
        Welcome {user && user.name}
        <BlogForm/>
        <section className='BlogList'>
          {blogs.length> 0 ?(<div className='blogs'>
            {blogs.map((blog)=>{
              return(
              <ViewBlogs key={blog._id} blog={blog}/>)
            })}
          </div>):(<h3>No blogs uploaded yet</h3>)}
        </section>
    </div>
  )
}
export default Home
