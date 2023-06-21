import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'

const buy = () => {
  return (
    <div className='parent-div'>
    <Header/>
    <div className="buy-centerdiv">
        <h1>Buy IDQ Token</h1>
        <input type="number" placeholder='enter amount'/>
        <Link to={'/buytoken'}> <button>Buy</button> </Link>
    </div>
    </div>
  )
}

export default buy