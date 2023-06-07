import React ,{useState}from 'react'
import Header from './header';

const Verify = () => {
    const [buttonvalue,setvalue] = useState(false);
    const Show = ()=>setvalue(!buttonvalue);
  return (
    <>
    <Header/>
    <div className="buy-centerdiv">
        <h3 id='verify-vc-headline'>Verify Your VC</h3>
        <div className="inputs-verify-vc">
            <input type="text" placeholder='Certificate URL'/>
            <button onClick={Show}>Verify</button>
        </div>
    </div>
    <div className={buttonvalue ?"remark":"nothing"}>
        <h3>Verified</h3>
    </div>
    </>
  )
}

export default Verify