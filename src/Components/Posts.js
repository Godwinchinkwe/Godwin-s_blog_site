import React from 'react'
import { DummyPosts } from '../Data/Data'
import { useState } from 'react'
import PostItem from './PostItem'

const Posts = () => {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className='posts'>
   
{ posts.length > 0 ?
      <div className='container posts-container'>
      {
            posts.map(({id, Image, authorId, category, title, des})=> <PostItem key={id} Image={Image} category={category} authorId={authorId} title={title} des={des} />)
        }
      </div> : <h2 className='center'> No Post Founds </h2> }
      
    </section>
  )
}

export default Posts
