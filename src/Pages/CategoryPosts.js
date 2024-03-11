import React from 'react'
import { useState } from 'react'
import { DummyPosts } from '../Data/Data'
import PostItem from '../Components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className='categoryPosts'>
      <h1 className='page-title'>Category Posts</h1>

    { posts.length > 0 ?
    <div className='container categoryPosts-container'>
    {
          posts.map(({id, Image, authorId, category, title, des}, index)=> <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} />)
      }
    </div> : <h2 className='error-center'> No postd founds </h2> }
    
  </section>
  // <div></div>
  )
}

export default CategoryPosts
