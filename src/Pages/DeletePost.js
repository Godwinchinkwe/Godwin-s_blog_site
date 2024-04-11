import React, { useEffect, useContext} from 'react'
import { UserContext } from '../Context/userContext'
import {useNavigate } from 'react-router-dom'



const DeletePost = () => {

  const navigate = useNavigate()

  const {currentUser } = useContext(UserContext)
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
   useEffect(()=>{
    if(!token){
      navigate('/login')
    }
   }, [])
  return (
    <div>
      
    </div>
  )
}

export default DeletePost
