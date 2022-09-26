import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <br />
      <Link to="/SignIn"><button>Go back</button></Link>
    </div>
    
    
  )
}

export default Dashboard