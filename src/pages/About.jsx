import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <NavLink to="/">HOME</NavLink><br/>
        <NavLink to="/services">SERVICES</NavLink><br />
        <NavLink to="/about">ABOUT</NavLink>
    </div>
  )
}

export default About