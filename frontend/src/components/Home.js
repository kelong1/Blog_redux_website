import React from 'react'
import { useEffect } from 'react'
import{useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import BlogForm from './BlogForm'

export function Home() {
  const navigate=useNavigate()
  const{user}=useSelector((state)=>state.auth)

  useEffect(()=>{
      if(!user){
        navigate("/login")
      }
  },[user,navigate])
  return (
    <div>
        Welcome {user && user.name}
        <BlogForm/>
    </div>
  )
}
export default Home
