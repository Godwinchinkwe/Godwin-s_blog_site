import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
        <div className='container nav-container'>
            <Link className='nav-logo' to={"/"}>
                <h3>Fire S<span>tac</span>k</h3>
            </Link>

            <ul className='nav-menu'>
                <li Link to={"/profile"}> Beg Joker  </li>
                <li Link to={"/create"}> Create Posts  </li>
                <li Link to={"/authors"}> Authors  </li>
                <li Link to={"/logout"}> Logout  </li>
            </ul>

            <button className='nav-toggle-button'>
             <FaBars />
             <AiOutlineClose />
            </button>

        </div>
      
    </nav>
  )
}

export default Header
