import React,{ useState } from 'react'
import Header from './header';

const Create = () => {
    const [buttonvalue,setvalue] = useState(false);
    const Show = ()=>setvalue(!buttonvalue);
  return (
    <>
    <Header/>
    <div className="buy-centerdiv">
        <h2 id='create-headline'>Create New Wallet</h2>
        <div className="name-input">
            <input type="text" placeholder="Enter Wallet Name" />
            <button onClick={Show}>Create</button>
        </div>
    </div>
    <div className={buttonvalue ?"remark":"nothing"}>
        <h3>Created</h3>
    </div>
    </>
  )
}

export default Create