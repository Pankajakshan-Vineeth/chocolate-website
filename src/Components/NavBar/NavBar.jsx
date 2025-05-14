import React from "react";
import './NavBar.css'
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import search from "../../assets/search.png"

const NavBar = () => {
  return (
    <div>
      <header className="Navbar">
        <div className="navbar-top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-actions">
            <a href="#">LOGIN</a>
            <a href="#">REGISTER</a>
            <div className="cart">
              <img src={cart} alt="" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>

        <nav className="navbar-bottom">
          <ul className="nav-links">
            <li><a href="#">CHOCOLATES</a></li>
      <li><a href="#">PASTRIES</a></li>
      <li><a href="#">CELEBRATION CAKES</a></li>
      <li><a href="#">CROISSANTS</a></li>
      <li><a href="#">COOKIES</a></li>
      <li><a href="#">MACARONS</a></li>
          </ul>
          <div className="search-bar">
           <input type="text"  placeholder="Enter Your Keyword"/>
           <button><img src={search} alt="" /></button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
