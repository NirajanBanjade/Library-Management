import React from "react";
import { useState,useEffect } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE_URL;


const LoginPage = () => {
  
  const [id,setId]=useState("");
  const [pass,setPass]=useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch(`${API_BASE}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, password: pass })
      });
      

      if (res.ok) {
        // alert("Login successful ✅");
        // You can navigate to another page here if needed
        navigate("/products");
      } else {
        const msg = await res.text();
        alert("Login failed: " + msg);
      }
    } catch (err) {
      console.error("Login error", err);
      alert("Something went wrong");
    }
  };


  return (
    <>
      <div className="main-login">
        <div className="login-wrapper">
          <form className="login"  onSubmit={handleSubmit}>
            <h1>Log in</h1>

            <div id="email">
              <label htmlFor="email" className="foremail">Username</label>
              <input
                type="text"
                id="text"
                name="Username"
                required
                className="input"
                onChange={(e)=>setId(e.target.value)}
                  placeholder="nirajan"
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
                onChange={(e)=>setPass(e.target.value)}
                placeholder="nirajan"
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
