import React from 'react'
// import Posts from './Posts'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({thumbnail, authorId, category, title, des, postId, createdAt}) => {

    const shortTitle = title.lenght > 30 ? title.substr(0, 30 ) + '...' : title
    const shortDes = des.lenght > 145 ? des.substr(0, 145 ) + '...' : des
  return (
    <article className='post'>
        <div className='post-image'>
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
        </div>
        <div className='post-content'>
            <Link to={`posts/${postId}`}>
                <h3>{shortTitle}</h3>
            </Link>
            <p>{shortDes}</p>
            <div className='post-footer'>
                
                <PostAuthor authorId={authorId} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='btn btn-category'>{category}</Link>
            </div>
        </div>
      
    </article>
  )
}

export default PostItem
