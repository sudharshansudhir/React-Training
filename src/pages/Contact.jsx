import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <NavLink to="/">HOME</NavLink><br/>
        <NavLink to="/services">SERVICES</NavLink><br />
        <NavLink to="/about">ABOUT</NavLink><br />
    </div>
  )
}

export default Contact