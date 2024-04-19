import React, { useState, useEffect, useContext} from 'react'
// import {DummyPosts} from "../Data/Data"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../Context/userContext'
import axios from 'axios'
import Loader from '../Components/Loader'
import DeletePost from './DeletePost'



const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams()

  const navigate = useNavigate()

  const {currentUser } = useContext(UserContext)
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
   useEffect(()=>{
    if(!token){
      navigate('/login')
    }
   }, []) 

   useEffect(()=>{
      const fetchPosts = async () =>{
        setIsLoading(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`,{withCredentials:true, headers: {Authorization:`Bearer ${token}`}})
          setPosts(response.data)
        } catch (error) {
         console.log(error) 
        }
        setIsLoading
      }
      fetchPosts(false);
   }, [id])
    
    if(isLoading){
      return <Loader/>
    }

  return (
    <section>
      {
        posts.lenght ? <div className='container dashboard-container'>
          {
            posts.map(post =>{
              return <article key={post.id} className='dashboard-post'>
                <div className='dashboard-post-info'>
                  <div className='dashboard-post-thumbnail'>
                    <img src={`${process.env.REACT_APP_ASSESTS_URL}/uploads/${post.thumbnail}`} alt=''/>
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className='dashboard-post-actions'>
                  <Link to={`/posts/${post._id}`} className="btn sm">view</Link>
                  <Link to={`/posts/${post._id}/edit`} className="btn sm primary">Edit</Link>
                 <DeletePost postId={post._id} />
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
