import React, { useEffect } from 'react'
// import { DummyPosts } from '../Data/Data'
import { useState } from 'react'
import PostItem from './PostItem'
import Loaader from "../assets/loaading.gif"
import axios  from 'axios'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
 

    useEffect(()=>{
      const fetchPosts = async () =>{
        setIsLoading(true);
        try {
          // const response = await axios.get(`${process.env.REACT_BASE_URL}/posts`)
          const response = await axios.get()
          setPosts(response?.data)
        } catch (err) {
          console.log(err)
        }
        setIsLoading(false)
      }
      fetchPosts();
    },[])

    if(isLoading){
      return <Loaader/>
    }
  return (
    <section className='posts'>
   
{ posts.length > 0 ?
      <div className='container posts-container'>
      {
            posts.map(({_id:id, thumbnail, authorId, category, title, createdAt, creator, des})=> <PostItem key={id} thumbnail={thumbnail} category={category} authorId={creator} title={title} des={des} createdAt={createdAt} />)
        }
      </div> : <h2 className='center'> No Post Founds </h2> }
      
    </section>
  )
}

export default Posts
