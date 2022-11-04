import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog,reset } from '../features/Blogs/blogSlice'
import {toast}from "react-toastify"

const UpdateForm = () => {
      const[formData,setFormData]=useState({
        title:"",
        category:"",
        Blog:"",
      })

      const{title,category,Blog}=formData
      

      const navigate=useNavigate()
      const dispatch=useDispatch()
      const {blogs,isError,isSuccess,message}=useSelector((state)=>state.blogs)
     
      useEffect(()=>{
       
        if(isError){
          toast.error("message")
        }
        if(isSuccess||blogs){
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
    Blog
  }
  dispatch(addBlog(blogData))
  setFormData("")
}



  return (
    <div>
        <form className="blogForm form-control" onSubmit={onSubmit}>
            <h2>Add a new Blog</h2>
            <input type="text" id='title' name='title' placeholder='Enter your Title'className='form-control' onChange={onChange}/>
            <input type="text" id="category" name="category" placeholder='Enter your category'className='form-control' onChange={onChange}/>
            <textarea  cols="10" rows="5" id="Blog" name="Blog" placeholder='Write your new Blog'className='form-control'onChange={onChange}></textarea>
            
            <button className='btn btn-block' type='submit'>Submit</button>
            
        </form>
    </div>
  )
}

export default UpdateForm