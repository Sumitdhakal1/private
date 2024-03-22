import React from 'react'
 import "../styles/navbar.scss"
 import { IoReorderThree } from "react-icons/io5";
 import { Navigate, Link, Routes, Route  } from 'react-router-dom';
const Navbar = () => {
  return (
     <div className="navigation">
      <nav>
          <div className="nav-header">
        <div className="logo">AirdropHub</div>
        <IoReorderThree  className='toggle'/>
        </div>
        <ul className='nav-item'>
          <li>
          <a href="">Home</a>
          </li>
          <li>
          <a href="./Airdrops/Airdrop">Airdrops</a>
          </li>
          <li>
          <a href="">Blog</a>
          </li>
          <li>
          <a href="">Contact us</a>
          </li>
        </ul>
      </nav>
     </div>
  )
}

export default Navbar