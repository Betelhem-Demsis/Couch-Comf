import React from 'react'
import { Link } from 'react-router-dom'
import "../css/signup.css"

function Signup() {
  return (
    <div className='register-container'>
    <h1>Sign Up Here</h1>
    <p className='login-link'>Already have an account? <Link to="/Login">Login</Link></p>
    <form className='reg-form'>
      <div className="name"> 
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='Password'/>
      <input type="password" placeholder='Confirm Password'/>
      <button className='register-button'> Create Account</button>
    </form>
  </div>
  )
}

export default Signup
