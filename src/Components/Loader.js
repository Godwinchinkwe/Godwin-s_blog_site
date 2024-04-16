import React from 'react'
import loaading from '../assets/loaading.gif'

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader_image'>
         <img src={loaading} alt=""/>
      </div>
    </div>
  )
}

export default Loader

