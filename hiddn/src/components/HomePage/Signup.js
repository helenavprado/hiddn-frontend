import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="sign-up-container">
      <div className="logo">
        <img src="../../../logo-emoji.png" alt="logo"></img>
      </div>
      <div className="welcome">Create your account</div>
      <div className="divider"></div>
      <div className="login-form">
        <form method="POST">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Email"></input>
          <div id="password-container">
            <input placeholder="Password" type="password"></input>
            <img id="password-eye" src="../../../opened-eye.png"></img>
          </div>
          <input type="text" placeholder="Little Bio"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Signup;
