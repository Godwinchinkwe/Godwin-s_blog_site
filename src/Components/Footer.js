import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='container footer-container'>
      <ul className='footer-categories'>
        <li><Link to={"/posts/categories/Education"} >Education</Link></li>
        <li><Link to={"/posts/categories/Discovery"} >Discovery</Link></li>
        <li><Link to={"/posts/categories/Agriculture"} >Agriculture</Link></li>
        <li><Link to={"/posts/categories/Entertainment"} >Entertainment</Link></li>
        <li><Link to={"/posts/categories/Art"} >Art</Link></li>
        <li><Link to={"/posts/categories/Business"} >Business</Link></li>
        <li><Link to={"/posts/categories/Investment"} >Investment</Link></li>
        <li><Link to={"/posts/categories/Fashion"} >Fashion</Link></li>
        <li><Link to={"/posts/categories/Weather"} >Weather</Link></li>
        <li><Link to={"/posts/categories/Sport"} >Sport</Link></li>
        <li><Link to={"/posts/categories/Science"} >Science</Link></li>
        <li><Link to={"/posts/categories/Movie"} >Movie</Link></li>
        <li><Link to={"/posts/categories/Movie"} >Music</Link></li>
      </ul>

      <div className='footer-copyright'>
        <small>&copy; copyright All Right Reserved || Devodinakachi website </small>
      </div>

      </div>
    </footer>
  )
}

export default Footer
