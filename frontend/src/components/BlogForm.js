import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog,reset } from '../features/Blogs/blogSlice'
import {toast}from "react-toastify"

const BlogForm = () => {
      const[formData,setFormData]=useState({
        title:"",
        category:"",
        blog:"",
      })

      const{title,category,blog}=formData

      const navigate=useNavigate()
      const dispatch=useDispatch()
      const {blogs,isError,isSuccess,message}=useSelector((state)=>state.blogs)
      useEffect(()=>{
        if(isError){
          toast.error("message")
        }
        if(isSuccess||blog){
          navigate("/")
        }
        dispatch(reset())
      },[blogs,isError,isSuccess,message,navigate,dispatch])
    

      
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
}

const onSubmit=(e)=>{
  e.preventDefault()
 
  const blogData={
    title,
    category,
    blog
  }
  dispatch(addBlog(blogData))
}



  return (
    <div>
        <form classname="blogForm" className='form-control' onSubmit={onSubmit}>
            <h2>Add a new Blog</h2>
            <input type="text" placeholder='Enter your Title'className='form-control' onChange={onChange}/>
            <input type="text" placeholder='Enter your category'className='form-control' onChange={onChange}/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write your new Blog'className='form-control'onChange={onChange}></textarea>
            
            <button className='btn btn-dark' type='submit'>Submit</button>
            <p>Already have an account <a href='#'>Login here</a></p>
        </form>
    </div>
  )
}

export default BlogForm