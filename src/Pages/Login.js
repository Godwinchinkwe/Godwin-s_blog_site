import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  axios  from 'axios'

import { UserContext, userContext } from '../Context/userContext.js'



const LoginPage = () => {

  const [userData, setUserData] = useState({
 
    email:"",
    password:"",
  })

  const [error, setError] = useState("")
  const navigate = useNavigate()

  const {setCurrentUser} = useContext(UserContext)


  
  const changeInputHAndle = (e) => {
    setUserData(prevState =>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUser = async (e) =>{
    e.preventDEfault();
    setError("")
    try{
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`,userData
    );
    const user = await response.data
    setCurrentUser(user)
    navigate('/')
    }catch (err){
      setError(err.response.data.message)
    }
  }

  return (
    <section className='register'>
    <div className='container'>
      <h2>Sign In</h2>
      <form className='form login-form' onSubmit={loginUser}>
       { error && <p className='form-error-message'>{error}</p>}
      

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
