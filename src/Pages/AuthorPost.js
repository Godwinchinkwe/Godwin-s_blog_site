import React from 'react'
import { useState, useEffect } from 'react'
import PostItem from '../Components/PostItem'
import Loader from '../Components/Loader'
import axios  from 'axios'
import { useParams } from 'react-router-dom'



const AuthorPost = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams


  useEffect(()=>{
    const fetchPosts = async () =>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_BASE_URL}/posts/users/${id}`)
        setPosts(response?.data)
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchPosts();
  },[id])

  if(isLoading){
    return <Loader/>
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

export default AuthorPost
