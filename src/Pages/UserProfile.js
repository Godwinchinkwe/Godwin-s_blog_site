import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../assets/6.jpg"
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {

  const [avatar, setAvatar] = useState(Avatar)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  return (
    <section className='profile'>
      <div className='container profile-container'>
        <Link to={`myposts/${currentUser.id}`} className='btn'> My Posts</Link>
        <div className='profile-details'>
          <div className='avatar-wrapper'>
            <div className='profile-avatar'>
              <img src={avatar} alt=''/>
            </div>
            {/* Form to update */}
            <form className='avatar-form'>
              <input type='file' name="avatar" id="avatar"
onChange={e => setAvatar(e.tager.files[0])}  accept='png, jpg, jpeg'/>
 <label htmlFor='avatar'><FaRegEdit /></label>
            </form>
           <button className='profile-avatar-btn'><FaCheck /></button> 
          </div>

          <h1> dev Lucia</h1>

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
