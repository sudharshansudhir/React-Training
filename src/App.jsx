import React from 'react'
import User from './components/User'
import Subject from './components/Subject'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/services' Component={Services}></Route>
      <Route path='/contact' Component={Contact}></Route>
    </Routes>
    {/* <User name="SSR" dept="CSE" skills={["C","Java","Python","HTML","CSS","JS","REACT"]}/>
    <Subject name={["HTML","CSS","JS","REACT","NODE JS","EXPRESS JS","MONGO DB"]} /> */}
    </>
  )
}

export default App




