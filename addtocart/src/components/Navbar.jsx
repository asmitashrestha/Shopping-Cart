import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='title' to='/'>Shopping Cart</Link>
      <ul className='links'>
        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/cart'>Cart</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
