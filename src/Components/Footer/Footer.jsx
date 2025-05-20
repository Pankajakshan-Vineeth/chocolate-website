import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* OUR STORE */}
        <div className="footer-column">
          <h3 className="footer-title">OUR STORE</h3>
          <ul className="footer-list">
            <li>Premium Chocolates</li>
            <li>Celebration Cakes</li>
            <li>Macarons</li>
            <li>Bakes</li>
            <li>Gifts</li>
            <li>Pastries</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className="footer-column">
          <h3 className="footer-title">INFORMATION</h3>
          <ul className="footer-list">
            <li>About</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* BLOGS */}
        <div className="footer-column">
          <h3 className="footer-title">BLOGS</h3>
          <ul className="footer-list">
            <li>Go to blog page</li>
            <li>Discover L'inouï</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3 className="footer-title">CONTACT</h3>
          <ul className="footer-list">
            <li><i className="fas fa-envelope"></i> christmas@linoui.in</li>
            <li className="footer-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          COPYRIGHT © 2025 LINOUÏ – CHOCOLATES | PASTRIES 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
