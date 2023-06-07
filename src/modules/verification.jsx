import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const verification = () => {
  return (
    <div className="centerbox">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <span>enter one time password</span>
        <input type="text" placeholder='enter your OTP'/>
        <Link to={'/resetpassword'}>
            <div className="verify">verify</div>
         </Link>
    </div>
  )
}

export default verification