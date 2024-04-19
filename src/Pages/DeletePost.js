import React, { useEffect, useContext, useState} from 'react'
import { UserContext } from '../Context/userContext'
import {useNavigate, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'


const DeletePost = ({postId: id}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false)


  const {currentUser } = useContext(UserContext)
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
   useEffect(()=>{
    if(!token){
      navigate('/login')
    }
   }, [])

   const removePost = async () =>{
    setIsLoading(true)
      try {
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`,{withCredentials:true, headers:{Authorization: `Bearer ${token}` }})
        if(response.status ==  200){
          if(location.pathname == `/myposts/${currentUser.id}`){
            navigate(0)
          }else{
            navigate('/')
          }
        }
         setIsLoading(false)
      } catch (error) {
        
      }
   }
   
  return (
    <Link className='btn btn-sm btn-danger' onClick={()=> removePost(id)}> Delete</Link>
  )
}

export default DeletePost
