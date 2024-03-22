import React, { useState } from 'react'
import {DummyAuthor } from '../Data/Data'
import { Link } from 'react-router-dom'

const Author = ({id, name, Image, post }) => {

  const [authors, setAuthors ] =  useState(DummyAuthor )
  return (
    <section className='authors'>
     {authors.lenght> 0 ? <div className='container authors-container'>
      {
        authors.map(()=>{
          return <Link key={id} to={`/posts/users/${id}`} className='author'>
            <div className='author-avatar'>
              <img src={Image} alt={`image of ${name}`}/>
            </div>
            <div className='author-info'>
              <h4>{name}</h4>
              <p>{post}</p>
            </div>
          </Link>
        })
      }

      </div> : <h2 className='center'> No user/ Authors found </h2>}
    </section>
  )
}

export default Author
