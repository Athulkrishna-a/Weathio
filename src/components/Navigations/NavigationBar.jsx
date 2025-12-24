import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/weather_logo.png'
import '../Navigations/Navigation.css'
import { useState } from 'react'
import LoginForm from '../AuthPage/LoginForm'
import SignupForm from '../AuthPage/SignupForm'

const NavigationBar = () => {
  const [authType, setAuthType] = useState(null)



  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Weather logo" />
          <h1>WEATHIO</h1>
        </div>

        <nav className="nav-list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/vision">Vision</Link></li>
          </ul>
        </nav>

        <div className="nav-button">
          <button onClick={() => setAuthType("login")}>Login</button>
          <button onClick={() => setAuthType("signup")}>Signup</button>
        </div>

      </div>
      {authType === "login" && (
        <LoginForm onClose={() => setAuthType(null)} />
      )}

      {authType === "signup" && (
        <SignupForm onClose={() => setAuthType(null)} />
      )}

    </div>
  )
}

export default NavigationBar
