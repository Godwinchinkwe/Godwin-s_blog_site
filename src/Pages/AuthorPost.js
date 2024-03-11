import React from 'react'
import { useState } from 'react'
import { DummyPosts } from '../Data/Data'
import PostItem from '../Components/PostItem'


import { Link } from 'react-router-dom'
import AuthorImage from "../assets/a1.jpg"

const AuthorPost = () => {
  const [posts, setPosts] = useState(DummyPosts)
  return (
    <Link to={`/posts/user/:id`} className='post-author'>
      <div className='post-author-image'>
        <img src={AuthorImage} alt=""/> 
      </div>
 
    <div className='post-author-info'>
      <h5>Dev Lucia</h5>
      <small>Just Now</small>
    </div>
    </Link>
//     <section className='authorposts'>
//       <h1 className='page-title'>Author Posts</h1>

// { posts.length > 0 ?
//       <div className='container authorPosts-container'>
//       {
//             posts.map(({id, Image, authorId, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} />)
//         }
//       </div> : <h2 className='error-center'> No post founds </h2> }
      
//     </section>
  )
}

export default AuthorPost
