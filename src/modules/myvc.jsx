import React from 'react'
import Header from './header';
import { Link } from 'react-router-dom';

const Myvc = () => {
  return (
    <>
    <Header/>
    <div className="buy-centerdiv">
        <h2 id='buy-vc-headline'>My Verifiable Credentials</h2>
        <div className="vcinfo">
            <div className="vc-heading">
                <h3>No.</h3>
                <h5>1</h5>
                <h5>2</h5>
                <h5>3</h5>
                <h5>4</h5>
            </div>
            <div className="vc-heading">
                <h3>Name</h3>
                <h5>Lorem ipsum </h5>
                <h5>Lorem ipsum </h5>
                <h5>Lorem ipsum </h5>
                <h5>Lorem ipsum </h5>
            </div>
            <div className="vc-heading">
                <h3>Action</h3>
                <Link to={''}>Download</Link>
                <Link to={''}>Download</Link>
                <Link to={''}>Download</Link>
                <Link to={''}>Download</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Myvc