import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const reset = () => {
  return (
    <div className="centerbox">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <span>enter your email</span>
        <input type="text" placeholder='email'/>
        <Link to={'/verify'}>
            <div className="verify">send</div>
         </Link>
    </div>
  )
}

export default reset