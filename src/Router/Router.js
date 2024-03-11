import { BrowserRouter, Route, Routes } from "react-router-dom"

// Components...................
import Header from "../Components/Header"
import Footer from "../Components/Footer"

// Pages...........................
import Home from '../Pages/Home'
import Author from '../Pages/Author'
import AuthorPost from '../Pages/AuthorPost'
import CategoryPosts from '../Pages/CategoryPosts'
import CreatePosts from '../Pages/CreatePosts'
import Dashboard from '../Pages/Dashboard'
import DeletePost from '../Pages/DeletePost'
import EditPost from '../Pages/EditPost'
import ErrorPage from '../Pages/ErrorPage'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import PostDetails from '../Pages/PostDetails' 
import Register from '../Pages/Register' 
// import UserProfile from '../Pages/UserProfile'


export default function Router() {
  return (
    <>  
    <BrowserRouter >
        <Header />
         <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/authors" element={<Author />} />
            <Route path="/posts/user/:id" element={<AuthorPost />} />
            <Route path="/posts/categories/:category" element={<CategoryPosts />} />
            <Route path="/create" element={<CreatePosts />} />
            <Route path="/myposts/:id" element={<Dashboard />} />
            <Route path="/posts/:id/delete" element={<DeletePost />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />     
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/profile/:id" element={<UserProfile />} />   */}
            <Route path="*" element={<ErrorPage />} />          
         </Routes>   
        <Footer />  
    </BrowserRouter>     
    </>
  )
}
