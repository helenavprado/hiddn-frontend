import React, { useState } from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src="../../../logo-emoji.png" alt="logo"></img>
      </div>
      <div className="welcome">Welcome!</div>
      <div className="divider"></div>
      <div className="login-form">
        <form method="POST">
          <input type="text" placeholder="Email"></input>
          <input placeholder="Password" type="password"></input>
          <a className="forgot-password" href="">
            Forgot your password?
          </a>
          <input type="submit" value="Login"></input>
        </form>
      </div>
      <div className="sign-up">
        Dont have an account?
        <a href="Sign num for free!">Sign up for free!</a>
      </div>
    </div>
  );
}

export default Login;
