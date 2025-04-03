import React from "react";
import './login.css'

const LoginPage = () => {
    return (
        <>
        <div className="main-login">
<div className="login-wrapper">
        <form className="login">
          <h1>Log in</h1>

          <div id="email">
            <label htmlFor="email" className="foremail">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input"
            />
          </div>

          <div id="passw">
            <label htmlFor="pass" className="forpass">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              className="input"
            />
          </div>

          <div id="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>

          <div className="extra-options">

            <br />
            <p> Don't have an account? 
            <a href="/create-account">Register</a> </p>
          </div>
        </form>
      </div>
      </div>
        </>
    );
}

export default LoginPage;
