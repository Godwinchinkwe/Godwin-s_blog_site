import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
const [userData, setUserData] = useState({
  name: "",
  email:"",
  password:"",
  password2:"",
})

const changeInputHAndle = (e) => {
  setUserData(prevState =>{
    return {...prevState, [e.target.name]: e.target.value}
  })
}
  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign Up</h2>
        <form className='form register-form'>
          <p className='form-error-message'>This is an error message</p>
          <input type='text' placeholder='full Name' name="name" value={userData.name} onChange={changeInputHAndle} autoFocus/>

          <input type='text' placeholder='Email' name="email" value={userData.email} onChange={changeInputHAndle} />

          <input type='password' placeholder='password' name="password" value={userData.password} onChange={changeInputHAndle} />

          <input type='password' placeholder=' Confirm password' name="password2" value={userData.password2} onChange={changeInputHAndle} />
          <button type='submit' className='btn primary'> Register </button>

        </form>

        <small>Already have an account ? <Link to="/Login"> Sign in </Link></small>
      </div>
    </section>
  )
}

export default Register
