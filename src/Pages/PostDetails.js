import React from 'react'
import { Link } from 'react-router-dom'
// import AuthorPost from "./AuthorPost"
import postDtailImage from "../assets/1.jpg"
import PostAuthor from '../Components/PostAuthor'

const PostDetails = () => {
  return (
    <section>
      <div className='container PostDtail-container'>
        <div className='postdtail-top'>
          <PostAuthor />
          {/* <div className='postdtail-buttons'> */}
            <div className='postdtail-buttons'>
              <Link to={`/posts/werwer/edit`} className='btn btn-sm btn-primary'>
                Edit
              </Link>
              <Link to={`/posts/werwer/delete`} className='btn btn-sm btn-danger'>
                Delete
              </Link>
            </div>
          {/* </div> */}
        </div>
        <h1>Lorem ipsum, dolor sit amet consectrtur adpsicing elit</h1>
        <div className='postdtail-image'>
          <img src={postDtailImage} alt=""/>
        </div>
        <div className='postdtail-para'>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>

        </div>
       
      </div> 
    </section>
  )
}

export default PostDetails
