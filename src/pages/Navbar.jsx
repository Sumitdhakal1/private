import React from "react";
import "../styles/navbar.scss";
import { IoReorderThree } from "react-icons/io5";
import { Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Home from "./home/Home";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <nav>
        <div className="nav-header">
          <div className="logo" onClick={() => navigate("/")}>
            AirdropHub
          </div>

          <IoReorderThree className="toggle" />
        </div>
        <ul className="nav-item">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="airdrop">Airdrops</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
