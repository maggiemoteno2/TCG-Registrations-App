import React,{ useState } from 'react'
import axios from 'axios'

function LogIn() {
  const [loginDetails, setLoginDetails] = useState({});

  const submitCredentials = async(e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3000/students', loginDetails)
    } catch (e) {
      console.log(e)
    }
    
  }
  return (
    <div>
      <div class="login-form">
        <h2 class="text-center">User Login</h2>
        <form onSubmit={(e)=>submitCredentials(e)}>
          <div class="form-group">
            <input type="text" class="form-control input-lg" value={loginDetails.email} name="username" onChange={(e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })} placeholder="email" required="required" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control input-lg" value={loginDetails.password} name="password" onChange={(e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })} placeholder="Password" required="required" />
          </div>
          <button type="submit" class="btn btn-primary btn-lg float-right" onClick={(e) => submitCredentials(e)}>Sign in</button>

        </form>

      </div>
    </div>
  )
}

export default LogIn
