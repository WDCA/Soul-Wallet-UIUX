import React, { useState } from 'react'
import Header from './header';
import { Link } from 'react-router-dom';

const Home = () => {
    // use these hooks to change the value of data
    const [did,setdid] = useState("Lorem ipsum dolor sit amet.");
    const [idq,setidq] = useState(0);
  return (
    <div className='parent-div'>
        <Header/>
        <div className="backdiv">
            <div className="headback">
                <div className="headlines">
                    <h1>Your Soul</h1>
                    <h1>Wallet</h1>
                </div>
            </div>
            <div className="data">
                <h1>My Soul</h1>
                <h3>Your DID: {did}</h3>
                <h3>Your IDQ Token: {idq}</h3>
            </div>
            <div className="contacts">
                <h3>Contacts</h3>
                <div className="media">
                    <Link to={'https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.linkedin.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F%3Foriginal_referer%3D'}><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to={'https://www.instagram.com/'}><i class="fa-brands fa-instagram"></i></Link>
                    <Link to={'https://www.google.com/intl/en_in/gmail/about/'}><i class="fa-solid fa-envelope"></i></Link>
                    <Link to={'https://twitter.com/i/flow/login'}><i class="fa-brands fa-twitter"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home