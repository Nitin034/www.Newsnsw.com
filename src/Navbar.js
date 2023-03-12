 import React, { Component } from 'react'  
import imgg1 from './image/Screenshot (82).png';
import gif1 from './image/live-nfl-now.gif';
import { Link } from 'react-router-dom';

 
 export class Navbar extends Component {
   render() {
     return (
       <div>
        <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-danger">
          <div className="container-fluid">
          <img  src={imgg1} alt="" width="50" height="40" className="d-inline-block align-text-top mx-2"/>
            <Link className="navbar-brand" to="/"><strong>NSW NEWS</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/Contect">Contact</Link>
        </li>
        </ul> 
        <button type="button" className="btn btn-warning mx-1">
                  Breaking News <span><img src={gif1} alt="" width="35" height="25" className="d-inline-block align-top mx-1"></img></span>
                </button>
        </div>
          </div>
        </nav> 
<marquee style={{marginTop:"55px"}} width="100%" direction="left" height="30px" scrollamount="12" className='rolling-text bg-warning fixed-top'>
  Welcome to Neversettle67 World News Aplication &ensp; देश का सबसे तेज एकतार्फा न्‍यूज चैनल! &ensp; Registration number : 199967/2023  &ensp; Nitin Yadav (Frontend Devlopar ) Never_settle_67
   </marquee>
    </div>
     )
   }
 }
 export default Navbar
  