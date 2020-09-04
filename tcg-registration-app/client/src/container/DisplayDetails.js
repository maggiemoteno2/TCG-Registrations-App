import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayDetails () {
  const [credentials, setCredentials] = useState({
    name: "", surname: "", email: "", password: "",
    home_Address: "", id_Number: ""
  })
  const [studentDetails, setStudentDetails] = useState([])

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/students')
      setStudentDetails(data)
    } catch (e) {
      console.log(e)
    }
  }, [setStudentDetails])
  console.log(studentDetails)
  const submit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3000/students', credentials)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <div class="signup-form">
        <form onSubmit={(e) => submit(e)}>
          <h2>Fill Form</h2>
          <p class="hint-text">Enter Personal Details</p>
          <div class="form-group">
            <div class="row">
              <div class="col"> <input type="name" class="form-control"
                name="name"
                value={credentials.name}
                placeholder="enter your name"
                onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} /></div>
            </div>
          </div>

          <div class="form-group">
            <input type="surname"
              class="form-control"
              name="surname"
              value={credentials.lastName}
              placeholder="enter your lastName"
              onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
          <br />
          <div class="form-group">
            <input type="email"
              class="form-control"
              name="email"
              value={credentials.email}
              placeholder=" enter email"
              onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
          <br />
          <div class="form-group">
          <input name="id_Number"
              class="form-control"
            value={credentials.id_Number} type="text" placeholder="id_Number"
            onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
          <br />
          <div class="form-group">
            <input name="home_Address"
              class="form-control"
              value={credentials.home_Address}
              type="text" onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} placeholder="home_Address" />
          </div>
          <br />
          <div class="form-group">
          <input name="password"
              class="form-control"
            value={credentials.password} type="password" placeholder="enter password"
            onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
           </div>
          <br />
          <div class="form-group">
            <input class="btn btn-success btn-lg btn-block" type="submit" />
          </div>
        </form>
        {studentDetails.map(credential => <div>Name:{credential.name}, surname:{credential.surname}, email:{credential.email},
       Home Address:{credential.home_Address}, ID number:{credential.id_Number}<br /><br />
        </div>)
        }
      </div>
    </div>
  )
}

export default DisplayDetails

