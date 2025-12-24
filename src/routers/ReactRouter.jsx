import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from '../components/Navigations/NavigationBar'
import '../App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Vision from '../pages/Vision'
const ReactRouter = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  )
}

export default ReactRouter
