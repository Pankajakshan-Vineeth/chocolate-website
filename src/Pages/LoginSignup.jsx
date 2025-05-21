import React from "react";
import "./CSS/LoginSignup.css";
import { useLocation } from "react-router-dom";

const LoginSignup = () => {
  const location = useLocation();
  const isRegistering = location.pathname === "/register";

  return (
    <div
      className={`login-createaccount ${isRegistering ? "register-mode" : ""}`}
    >
      <div className={`login-container ${!isRegistering ? "grey-bg" : ""}`}>
        <h3>LOGIN</h3>

        <div className='login-fields'>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Sign in</button>
        <span className="forgot">Forgot your password?</span>
      </div>
      <div className={`signup-container ${isRegistering ? "grey-bg" : ""}`}>
        <h3>CREATE ACCOUNT</h3>

        <div className="signup-fields">
          <input type="text" placeholder="First name" />
          <span>
            <input type="text" placeholder="Last name" />
          </span>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="signup-actions">
          <button>Create</button>
          <span>
            or <a href="/">Return to Store</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
