import React from 'react'
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div>
        <form classname="registerForm" className='form-control'>
            <h2>Register</h2>
            <input type="text" placeholder='Enter your name'className='form-control'/>
            <input type="email" placeholder='Enter your email' className='form-control'/>
            <input type="password" placeholder='Enter your password'className='form-control'/>
            <input type="password" placeholder='Confirm your password' className='form-control'/>
            <button className='btn btn-dark'>Register</button>
            <p>Already have an account <Link to="/Login">Login here</Link></p>
        </form>
    </div>
  )
}

export default Register