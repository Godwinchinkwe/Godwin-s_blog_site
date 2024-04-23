import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Avatar from "../assets/6.jpg"
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { UserContext } from '../Context/userContext';

const UserProfile = () => {

  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  const [isAvatarTouched, setIsavatarTouched] = useState(false)

  const navigate = useNavigate();

  const { currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  }, [])

  useEffect(()=>{
    const getUser = async () =>{
      const response = await axios.get(`${process.env.REACT}/users/${currentUser.id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      const {name, email, avatar} = response.data;
      setName(name);
      setEmail(email)
      setAvatar(avatar);
    }

    getUser();
  }, [])

 const changeAvatarHandler = async () => {
    setIsavatarTouched(false);
    try {
      const postData = new FormData();
      postData.set("avatar", avatar);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/change-avatar`, postData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      setAvatar(response.data.avatar)

    } catch (error) {
      console.log(error)
    }
 }

  return (
    <section className='profile'>
      <div className='container profile-container'>
        <Link to={`myposts/${currentUser.id}`} className='btn'> My Posts</Link>
        <div className='profile-details'>
          <div className='avatar-wrapper'>
            <div className='profile-avatar'>
              <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${avatar}`} alt=''/>
            </div>
            {/* Form to update */}
            <form className='avatar-form'>
              <input type='file' name="avatar" id="avatar"
onChange={e => setAvatar(e.tager.files[0])}  accept='png, jpg, jpeg'/>
 <label htmlFor='avatar'onClick={() => setIsavatarTouched(true)}><FaRegEdit /></label>
            </form>
             {isAvatarTouched && <button className='profile-avatar-btn' onClick={changeAvatarHandler} ><FaCheck /></button> }
              </div>

          <h1>{currentUser.name}</h1>

          {/* form to update user details  */}
          <form className='form profile-form'>
            <p className='form-error-message'>This is a error message</p>
            <input type='text' placeholder='Full Name' value={name}  onChange={e => setName(e.target.value)}/>
            <input type='email' placeholder='Email' value={email}  onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='Current Password' value={currentPassword}  onChange={e => setCurrentPassword(e.target.value)}/>
            <input type='password' placeholder='New Password' value={newPassword}  onChange={e => setNewPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm New Password' value={confirmNewPassword}  onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type='submit' className='btn primary'> Update Details</button>


          </form>


        </div>
      </div>
    </section>
  )
}

export default UserProfile
