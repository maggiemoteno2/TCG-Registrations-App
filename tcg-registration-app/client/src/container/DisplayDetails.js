import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayDetails() {
  const [credentials, setCredentials] = useState({ name: "", surname: "", email: "", password: "",
   home_Address:"", id_Number:""})
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
      <form onSubmit={(e) => submit(e)}>
        <input type="name"
          name="name"
          value={credentials.name}
          placeholder="enter your name"
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />

        <input type="surname"
          name="surname"
          value={credentials.lastName}
          placeholder="enter your lastName"
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input type="email"
          name="email"
          value={credentials.email}
          placeholder=" enter email"
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input name="id_Number"
          value={credentials.id_Number} type="text" placeholder="id_Number"
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input name="home_Address"
          value={credentials.home_Address}
          type="text" onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} placeholder="home_Address"/>
        <br />
        <input name="password"
          value={credentials.password} type="password" placeholder="enter password"
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
        <br />
        <input type="submit" />
      </form>
      {studentDetails.map(credential => <div>Name:{credential.name}, surname:{credential.surname}, email:{credential.email},
       Home Address:{credential.home_Address}, ID number:{credential.id_Number}<br/><br/>
       </div>)
      }
     
    </div>
  )
}

export default DisplayDetails

 