import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './modules/home'
import Login from './modules/login'
import Verify from './modules/verification'
import Register from './modules/register'
import Reset from './modules/reset'
import Resetpassword from './modules/resetpass'
import Wallet from './modules/wallet'
import Buy from './modules/buy'
import Buytoken from './modules/buytoken'
import Myvc from './modules/myvc'
import Verifyvc from './modules/verify-vc'
import Create from './modules/create'
import Upload from './modules/upload'
import './stylesheets/header.css'
import './stylesheets/login.css'
import './stylesheets/verification.css'
import './stylesheets/register.css'
import './stylesheets/wallet.css'
import './stylesheets/home.css'
import './stylesheets/buy.css'
import './stylesheets/buytoken.css'
import './stylesheets/myvc.css'
import './stylesheets/verify-vc.css'
import './stylesheets/create.css'
import './stylesheets/upload.css'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/resetpassword" element={<Resetpassword/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/buytoken" element={<Buytoken/>} />
        <Route path="/myvc" element={<Myvc/>} />
        <Route path="/verify-vc" element={<Verifyvc/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/upload" element={<Upload/>} />
      </Routes>
    </Router>
  );
}

export default App;
