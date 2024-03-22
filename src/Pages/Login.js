import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [userData, setUserData] = useState({
 
    email:"",
    password:"",
  
  })
  
  const changeInputHAndle = (e) => {
    setUserData(prevState =>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className='register'>
    <div className='container'>
      <h2>Sign In</h2>
      <form className='form login-form'>
        <p className='form-error-message'>This is an error message</p>
      

        <input type='text' placeholder='Email' name="email" value={userData.email} onChange={changeInputHAndle} autoFocus />

        <input type='password' placeholder='password' name="password" value={userData.password} onChange={changeInputHAndle} />

       
        <button type='submit' className='btn primary'> Login </button>

      </form>

      <small>Don't have an account ? <Link to="/register"> Sign Up </Link></small>
    </div>
  </section>
  )
}

export default LoginPage
