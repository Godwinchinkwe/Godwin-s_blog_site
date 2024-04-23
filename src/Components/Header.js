import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { UserContext } from '../Context/userContext';

const Header = () => {
  const [IsNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false ); 
  const {currentUser} = useContext(UserContext)

  const closeNavHandler = () =>{
    if(window.innerWidth < 800) {
      setIsNavShowing(false);
    } else{
      setIsNavShowing(true)
    }
  }

  return (
    <nav>
        <div className='container nav-container'>
            <Link className='nav-logo' to={"/"} onClick={closeNavHandler}>
                <h3>Gee B<span>lo</span>g</h3>
                {/* <img src={Logo} alt="Navbar Logo" /> */}
            </Link>

           {currentUser?.id && IsNavShowing && <ul className='nav-menu'>
                <li > <Link  to={`/profile/${currentUser.id}cu`} onClick={closeNavHandler} > Gee Win </Link> </li>
                <li>< Link to={"/Create"} onClick={closeNavHandler}> Create Posts </Link> </li>
                <li>< Link to={"/author"} onClick={closeNavHandler}> Authors </Link> </li>
                <li>< Link to={"/logout"} onClick={closeNavHandler}> Logout </Link> </li>
            </ul>}

            {!currentUser?.id && IsNavShowing && <ul className='nav-menu'>
                <li>< Link to={"/author"} onClick={closeNavHandler}> Authors </Link> </li>
                <li>< Link to={"/login"} onClick={closeNavHandler}> Login </Link> </li>
            </ul>}

            <button className='nav-toggle-button' onClick={()=>setIsNavShowing(!IsNavShowing)}>
             
             {IsNavShowing ? <AiOutlineClose /> : <FaBars />}
             
            </button>

        </div>
      
    </nav>
  )
}

export default Header
