import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section>
      <div className='error-center'>
        <h2>404</h2>
        <h3>Opps, This page Not Found !</h3>
        <Link to={"/"} className='btn btn-primary'>Go back Home</Link>

      </div> 
    </section>
  )
}

export default ErrorPage
