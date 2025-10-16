import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='text-2xl font-bold text-center bg-gray-800 flex gap-10 text-white p-4'>
      <NavLink to="/">HOME</NavLink><br/>
      <NavLink to="/services">SERVICES</NavLink><br />
      <NavLink to="/about">ABOUT</NavLink><br />
      <NavLink to="/contact">CONTACT</NavLink>
    </div>
  )
}

export default Navbar
