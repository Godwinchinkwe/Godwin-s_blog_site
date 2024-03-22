import React from 'react'
// import Posts from './Posts'
import { Link } from 'react-router-dom'
// import AuthorPost from '../Pages/AuthorPost'
import PostAuthor from './PostAuthor'

const PostItem = ({Image, authorId, category, title, des, postId}) => {

    const shortTitle = title.lenght > 30 ? title.substr(0, 30 ) + '...' : title
    const shortDes = des.lenght > 145 ? des.substr(0, 145 ) + '...' : des
  return (
    <article className='post'>
        <div className='post-image'>
            <img src={Image} alt="" />
        </div>
        <div className='post-content'>
            <Link to={`posts/${postId}`}>
                <h3>{shortTitle}</h3>
            </Link>
            <p>{shortDes}</p>
            <div className='post-footer'>
                {/* <AuthorPost /> */}
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn btn-category'>{category}</Link>
            </div>
        </div>
      
    </article>
  )
}

export default PostItem
