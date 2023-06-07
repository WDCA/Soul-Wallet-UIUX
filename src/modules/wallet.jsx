import React from 'react';
import Header from './header';
import chart from '../images/chart.jpg';

const wallet = () => {
  return (
    <>
    <Header/>
    <div className="basebox">
        <div className="upperportion">
          <img src={chart} alt="" />
          <div className="status">
            <p>Your wallet balance</p>
            <h1>0.00$ coin Name</h1>
          </div>
        </div>
        <div className="lowerportion">
          <div className="coininfo">coin Name</div>
          <div className="coininfo">coin Name</div>
          <div className="coininfo">coin Name</div>
          <div className="coininfo">coin Name</div>
          <div className="coininfo">coin Name</div>
          <div className="coininfo">coin Name</div>
          <div className="coininfo">coin Name</div>
        </div>
    </div>
    </>
  )
}

export default wallet