import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios  from 'axios'


const Register = () => {
const [userData, setUserData] = useState({
  name: "",
  email:"",
  password:"",
  password2:"",
})
 
const [error, setError] = useState('')
const navigate = useNavigate

const changeInputHAndle = (e) => {
  setUserData(prevState =>{
    return {...prevState, [e.target.name]: e.target.value}
  })
}

const registerUser = async (e) => {
  e.preventDefault()
  setError('')
  try{
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,userData )
    const newUser = await response.data;
    console.log(newUser)
    if(!newUser){
      setError("couldn't register user, please try again ")
    }
    navigate('/login')
  } catch (err){
    setError(err.response.data.message)
  }
}
  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign Up</h2>
        <form className='form register-form' onSubmit={registerUser}>
          {error && <p className='form-error-message'>{error}</p>}
          <input type='text' placeholder='full Name' name="name" value={userData.name} onChange={changeInputHAndle} autoFocus/>

          <input type='text' placeholder='Email' name="email" value={userData.email} onChange={changeInputHAndle} />

          <input type='password' placeholder='Password' name="password" value={userData.password} onChange={changeInputHAndle} />

          <input type='password' placeholder=' Confirm password' name="password2" value={userData.password2} onChange={changeInputHAndle} />
          <button type='submit' className='btn primary'> Register </button>

        </form>

        <small>Already have an account ? <Link to="/Login"> Sign in </Link></small>
      </div>
    </section>
  )
}

export default Register
