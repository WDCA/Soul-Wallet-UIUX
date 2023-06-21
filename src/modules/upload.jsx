import React,{ useState } from 'react'
import Header from './header';

const Upload = () => {
    const [buttonvalue,setvalue] = useState(false);
    const Show = ()=>setvalue(!buttonvalue);
  return (
    <div className='parent-div'>
    <Header/>
    <div className="buy-centerdiv">
        <h2 id='create-headline'>Upload Your Wallet</h2>
        <div className="upload-input">
            <input type="text" placeholder="Enter Private Key" />
            <select name="cars" id="Token" >
                <option value="placeholder">--Select Token--</option>
                <option value="abc">abc</option>
                <option value="abc">abc</option>
                <option value="abc">abc</option>
            </select>
            <button onClick={Show}>Upload</button>
        </div>
    </div>
    <div className={buttonvalue ?"remark":"nothing"}>
        <h3>Uploaded</h3>
    </div>
    </div>
  )
}

export default Upload