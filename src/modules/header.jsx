import React, {useState} from 'react';
import logo from '../images/logo.png'
import DID from '../images/did.jpg'
import QR from '../images/qrcode.png'
import Wallet from '../images/wallet.png'
import Bars from '../images/bars.png'
import Cube from '../images/cube.png'
import User from '../images/user.png'
import Aptos from '../images/aptos.png'
import Exit from '../images/exit.png'
import {Link} from 'react-router-dom'

const Home = () => {
    const [rightsidebar,setrightsidebar] = useState(false);
    const [leftsidebar,setleftsidebar] = useState(false);
    const Showright = ()=>setrightsidebar(!rightsidebar);
    const Showleft = ()=>setleftsidebar(!leftsidebar);
  return (
    <>
    <div className="navbar">
        <div className="logobox">
            <img src={logo} alt="logo" />
            <input type="checkbox" id="sidebarclick" onClick={Showleft}/>
            <label id='sidebarbutton' htmlFor="sidebarclick">
                <i class="fa-solid fa-caret-down"></i>
            </label>
        </div>
        <div className="features">
            <div className="search">
                <input type="search" id='searchbox' placeholder='search'/>
                <label htmlFor="searchbox"><i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
            <input type="checkbox" name="check" id="navbtn" onClick={Showright}/>
            <label htmlFor="navbtn">
                <i class="fa-solid fa-bars" ></i>
            </label>
        </div>
    </div>

    <div className={leftsidebar?  'notactive-sidebar': 'sidebar-header'}>
        <Link to={'/home'}><img src={DID} alt="logo" /></Link>
        <Link to={'/home'}><img src={QR} alt="logo" /></Link>
        <Link to={'/wallet'}><img src={Wallet} alt="logo" /></Link>
        <Link to={'/home'}><img src={Bars} alt="logo" /></Link>
        <Link to={'/home'}><img src={Cube} alt="logo" /></Link>
        <Link to={'/home'}><img src={User} alt="logo" /></Link>
        <Link to={'/home'} id='aptos'><img src={Aptos} alt="logo" /> <p>Aptos</p> </Link>
        <Link to={'/'}><img src={Exit} alt="logo" /></Link>
    </div>

    <div className={rightsidebar? 'active' : 'notactive'}>
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