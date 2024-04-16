import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const PostAuthor = ({authorId, createdAt}) => {
  const [author, setAuthor] = useState({})

  useEffect(()=> {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorId}`)
        setAuthor(response?.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAuthor();
  },[])


  return (
    <Link to={`/posts/user/sdfsdf`} className='post-author'>
    <div className='post-author-image'>
      <img src={`${process.env.REACT_ASSETS_URL}/uploads/${author?.avatar}`} alt=""/> 
    </div>

  <div className='post-author-info'>
    <h5>By: {author?.name}</h5>
    <small> <ReactTimeAgo date={new Date(createdAt)} locale='en-Us'/></small>
  </div>
  </Link>
  )
}

export default PostAuthor
