import React from "react";
import "./Login.css";

function Login(props) {
  return (
    <div className="login-container">
      <div className="logo">
        {/* <img src="../../../logo-emoji.png" alt="logo"></img> */}
      </div>
      <div className="welcome">Welcome!</div>
      <div className="divider"></div>
      <div className="login-form">
        <form method="POST">
          <input type="text" placeholder="Email"></input>
          <input placeholder="Password" type="password"></input>
          <a
            className="forgot-password"
            target="_blank"
            href="http://www.pudim.com.br/"
            rel="noreferrer"
          >
            Forgot your password?
          </a>
          <input type="submit" value="Login"></input>
        </form>
      </div>
      <div className="sign-up-in">
        Don't have an account?
        <a onClick={props.onclick} href="http://www.pudim.com.br/">
          Sign up for free!
        </a>
      </div>
    </div>
  );
}

export default Login;
