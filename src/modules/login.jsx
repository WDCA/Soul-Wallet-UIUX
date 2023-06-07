import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className="background">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="inputs">
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <a href="/reset"><span>Forgot password?</span></a>
        </div>
        <div className="buttons">
          <div className="btn1"><Link to="/home">Login</Link></div>
          <div className="btn1"><Link to="/register">Sign in</Link></div>
        </div>
    </div>
  )
}

export default login