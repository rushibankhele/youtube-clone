import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

  //early return pattern
  // if(!isMenuOpen) return null
  return (
    <div>
    {isMenuOpen ? <div className='p-2 m-2 shadow-lg col-span-1'>
      <ul>
        <li><Link to='/'>🏠︎ Home </Link></li>
        <li> Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
      <h1 className='pt-5 font-bold'>Subscriptions</h1>
      <ul>
        <li>Movie</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Music</li>
      </ul> 
      <h1 className='pt-5 font-bold'>Watch later</h1>
      <ul>
        <li>Movie</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Music</li>
      </ul>
    </div> : '' }
    </div>
  )
}

export default Sidebar