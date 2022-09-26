import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
        <form classname="loginForm" className='form-control'>
            <h2>Login</h2>
            
            <input type="email" placeholder='Enter your email'  className='form-control'/>
            <input type="password" placeholder='Enter your password' className='form-control'/>
            
            <button className='btn btn-dark'>Login</button>
            <p>Dont  have an account <Link to="/Register">Register here</Link></p>
        </form>
    </div>
  )
}

export default Login