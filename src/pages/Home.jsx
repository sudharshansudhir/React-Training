import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import State from '../components/State'

const Home = () => {
  return (
    <div className='bg-gray-300 h-[100vh]'>
        <Navbar/>
        <State/>
    </div>
  )
}

export default Home