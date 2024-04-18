import React, {useEffect, useState, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import postDtailImage from "../assets/1.jpg"
import PostAuthor from '../Components/PostAuthor'
import Loader from '../Components/Loader'
import DeletePost from './DeletePost'
import { UserContext } from '../Context/userContext'
import axios  from 'axios'


const PostDetails = () => {

  const {id} = useParams()
  const [post, setPost] = useState(null)
  // const [creatorID, setCreatorID] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)

  useEffect(()=>{
    const getPost = async () =>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response.data)
        // setCreatorID(response.data.creator)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    getPost();
  },[])

  if(isLoading){
    return <Loader/>
  }

  return (
    <section>
      {error && <p className='error'>{error}</p>}
      {post && <div className='container PostDtail-container'>
        <div className='postdtail-top'>
          <PostAuthor authorId={post.creator} createdAt={post.createdAt}/>
           {currentUser?.id == post?.creator && <div className='postdtail-buttons'>
              <Link to={`/posts${post?._id}edit`} className='btn btn-sm btn-primary'>
                Edit
              </Link>
              <DeletePost post={id} />
            </div>}
        </div>
        <h1> {post.title} </h1>
        <div className='postdtail-image'>
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt=""/>
        </div>
        <div className='postdtail-para'>
          <p dangerouslySetInnerHTML={{_html: post.description}}></p>
      
        </div>
       
      </div> }
    </section>
  )
}

export default PostDetails
 