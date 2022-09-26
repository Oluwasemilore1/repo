import React from 'react'
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='form'>
      <div>
        <h2>Email</h2>
        <input type="email" name="" id="" />
        <h2>Password</h2>
        <input type="password" name="" id="" />
        <div className="btn">
        <Link to='/dashboard'><button>Go to dashboard</button></Link>
        </div>
      </div>
    </div>
  )
} 

export default SignIn