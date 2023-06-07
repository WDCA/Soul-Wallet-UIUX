import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const resetpass = () => {
  return (
    <div className="background">
        <div className="centerdiv">
            <div className="logodiv">
                <img src={logo} alt="logo" />
            </div>
            <div className="inputs-area">
                <input type="password" placeholder='new password'/>
                <input type="password" placeholder='re-enter password' />
            </div>
            <div className="submit"><Link to="/">done</Link></div>
        </div>
    </div>
  )
}

export default resetpass