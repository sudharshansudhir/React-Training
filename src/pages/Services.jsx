import React from 'react'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <div>
        <NavLink to="/">HOME</NavLink><br/>
        <NavLink to="/services">SERVICES</NavLink><br />
        <NavLink to="/about">ABOUT</NavLink><br />
        <NavLink to="/contact">CONTACT</NavLink>
    </div>
  )
}

export default Services