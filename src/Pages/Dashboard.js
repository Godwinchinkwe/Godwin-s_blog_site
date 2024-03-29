import React, { useState } from 'react'
import {DummyPosts} from "../Data/Data"
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts)
  return (
    <section>
      {
        posts.lenght ? <div className='container dashboard-container'>
          {
            posts.map(post =>{
              return <article key={post.id} className='dashboard-post'>
                <div className='dashboard-post-info'>
                  <div className='dashboard-post-thumbnail'>
                    <img src={post.Image} alt=''/>
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className='dashboard-post-actions'>
                  <Link to={`/posts/${post.id}`} className="btn sm">view</Link>
                  <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
                </div>
              </article>
            })
          }

        </div> : <h2 className='center'> you have no post yet </h2>
      }
      
    </section>
  )
}

export default Dashboard
