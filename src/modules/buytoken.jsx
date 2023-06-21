import React, { useState } from 'react'
import Header from './header'

const Buytoken = () => {
    const [buttonvalue,setvalue] = useState(false);
    const Show = ()=>setvalue(!buttonvalue);
  return (
    <div className='parent-div'>
    <Header/>
    <div className="buytoken-centerdiv">
        <h2>Payment page</h2>
        <div className="card">
            <div className="cardnum">
                <h3>Card Number</h3>
                <input type="number" name="cardnumber" className='tokent-input' id="cardnumber" placeholder='Enter your card number'/>    
            </div>
            <div className="cardinfo">
                <div className="period">
                    <h3>Validity period</h3>
                    <input type="date" name="" className='tokent-input' id="" />    
                </div>
                <div className="cvv">
                    <h3>CVV</h3>
                    <input type="text" name="cvv" id="cvv" className='tokent-input' placeholder='CVV'/>    
                </div>
            </div>
            <div className="cardnum">
                <h3>Country</h3>
                <input type="search" name="country" id="country" className='tokent-input' placeholder='country'/>
            </div>
        </div>
        <button onClick={Show}>Pay</button>
    </div>
    <div className={buttonvalue ?"remark":"nothing"}>
        <h3>Payment Successful</h3>
    </div>
    </div>
  )
}

export default Buytoken