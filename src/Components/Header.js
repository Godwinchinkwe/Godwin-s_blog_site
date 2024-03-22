import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [IsNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false );

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
            </Link>

           {IsNavShowing && <ul className='nav-menu'>
                <li > <Link  to={"/profile"} onClick={closeNavHandler} > Gee Win </Link> </li>
                <li>< Link to={"/Create"} onClick={closeNavHandler}> Create Posts </Link> </li>
                <li>< Link to={"/author"} onClick={closeNavHandler}> Authors </Link> </li>
                <li>< Link to={"/logout"} onClick={closeNavHandler}> Logout </Link> </li>
            </ul>}

            <button className='nav-toggle-button' onClick={()=>setIsNavShowing(!IsNavShowing)}>
             
             {IsNavShowing ? <AiOutlineClose /> : <FaBars />}
             
            </button>

        </div>
      
    </nav>
  )
}

export default Header
