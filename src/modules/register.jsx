import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div className="background">
        <div className="centerdiv">
            <div className="logodiv">
                <img src={logo} alt="logo" />
            </div>
            <div className="inputs-area">
                <input className='fields' type="text" placeholder='email' />
                <div className="username">
                    <input className='fields' type="text" placeholder='First Name' />
                    <input className='fields' type="text" placeholder='Last Name' />
                </div>
                <div className="dob">
                    <input className='fields' type="text" placeholder='Date' />
                    <input className='fields' type="text" placeholder='Month' />
                    <input className='fields' type="text" placeholder='Year' />
                </div>
            </div>
            <div className="submit"><Link to="/verify">Sign in</Link></div>
        </div>
    </div>
  )
}

export default register