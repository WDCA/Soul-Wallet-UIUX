import React, {useState} from 'react';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const Home = () => {
    const [sidebar,setsidebar] = useState(false);
    const Show = ()=>setsidebar(!sidebar);
  return (
    <>
    <div className="navbar">
        <img src={logo} alt="logo" />
        <div className="features">
            <div className="search">
                <input type="search" id='searchbox' placeholder='search'/>
                <label htmlFor="searchbox"><i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
            <input type="checkbox" name="check" id="navbtn" onClick={Show}/>
            <label htmlFor="navbtn">
                <i class="fa-solid fa-bars" ></i>
            </label>
        </div>
    </div>
    <div className={sidebar? 'active' : 'notactive'}>
            <Link to={'/home'}>
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
            <Link to={'/wallet'}>
                <i class="fa-solid fa-wallet"></i>
                <span>Wallets</span>
            </Link>
            <Link to={'/create'}>
                <i class="fa-solid fa-plus"></i>
                <span>Create</span>
            </Link>
            <Link to={'/buy'}>
                <i class="fa-solid fa-bag-shopping"></i>
                <span>Buy</span>
            </Link>
            <Link to={'/upload'}>
                <i class="fa-solid fa-upload"></i>
                <span>Upload</span>
            </Link>
            <Link to={'/myvc'}>
                <i class="fa-solid fa-address-card"></i>
                <span>MyVC</span>
            </Link>
            <Link to={'/verify-vc'}>
                <i class="fa-solid fa-check-to-slot"></i>
                <span>Verify VCS</span>
            </Link>
            <Link to={'/'}>
                <i class="fa-sharp fa-solid fa-door-open"></i>
                <span>Logout</span>
            </Link>
            <div className="upward">
                <label htmlFor="navbtn"><i class="fa-sharp fa-solid fa-chevron-up"></i></label>
            </div>
        </div>
    </>
  )
}

export default Home