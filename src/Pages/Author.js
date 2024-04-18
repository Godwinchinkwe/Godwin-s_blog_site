import React, { useState, useEffect } from 'react'
// import {DummyAuthor } from '../Data/Data'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import Loaader from "../Components/Loader"

const Author = () => {

  const [authors, setAuthors ] =  useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    const getAuthors = async () => {
      setIsLoading(true);
    
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
      setAuthors(response.data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  getAuthors();
  },[])

  if(isLoading){
    return <Loaader />
  }

  return (
    <section className='authors'>
     {authors.lenght> 0 ? <div className='container authors-container'>
      {
        authors.map(({_id: id, avatar, name, posts})=>{
          return <Link key={id} to={`/posts/users/${id}`} className='author'>
            <div className='author-avatar'>
              <img src={`${process.env.REACT_APP_ASSESTS_URL}/uploads/${avatar}`} alt={`image of ${name}`}/>
            </div>
            <div className='author-info'>
              <h4>{name}</h4>
              <p>{posts}</p>
            </div>
          </Link>
        })
      }

      </div> : <h2 className='center'> No user/ Authors found </h2>}
    </section>
  )
}

export default Author
