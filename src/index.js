import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './Pages/ErrorPage';
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UserProfile from "./Pages/UserProfile";
import Author from "./Pages/Author";
import Createposts from "./Pages/CreatePosts";
import CategoryPosts from "./Pages/CategoryPosts";
import EditPost from "./Pages/EditPost";
import DeletePost from "./Pages/DeletePost";
import AuthorPost from './Pages/AuthorPost';
import Dashboard from './Pages/Dashboard';
import Logout from './Pages/Logout';
import UserProvider from './Context/userContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider> <Layout/> </UserProvider>,
    errorElement : <ErrorPage />,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetails/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "author", element: <Author/>},
      {path: "Create", element: <Createposts/>},
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      {path: "posts/users/:id", element: <AuthorPost/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "Posts/:id/edit", element: <EditPost/>},
      {path: "Posts/:id/delete", element: <DeletePost/>},
      {path: "logout", element: <Logout/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


