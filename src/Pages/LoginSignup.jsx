import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-createaccount">
      <div className="login-container">
        <h3>LOGIN</h3>

        <div className="login-fields">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Sign in</button>
        <span className="forgot">Forgot your password?</span>
      </div>

      <div className="signup-container">
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
