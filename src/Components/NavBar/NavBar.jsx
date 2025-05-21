import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import search from "../../assets/search.png";

const NavBar = () => {
  return (
    <div>
      <header className="Navbar">
        <div className="navbar-top">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="navbar-actions">
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
            <div className="cart">
              <img src={cart} alt="" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>

        <nav className="navbar-bottom">
          <ul className="nav-links">
            <li>
              <Link to= '/chocolates'>CHOCOLATES</Link>
            </li>
            <li>
              <Link to= '/pastries'>PASTRIES</Link>
            </li>
            <li>
              <Link to= '/cakes'>CELEBRATION CAKES</Link>
            </li>
            <li>
              <Link to= '/croissants'>CROISSANTS</Link>
            </li>
            <li>
              <Link to= '/cookies'>COOKIES</Link>
            </li>
            <li>
              <Link to= '/macarons'>MACARONS</Link>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Enter Your Keyword" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
