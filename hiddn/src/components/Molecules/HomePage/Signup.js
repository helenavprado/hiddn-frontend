import React, { useState } from "react";
import "./Signup.css";

function Signup(props) {
  const [eye, setEye] = useState(false);

  const handleClick = () => {
    setEye((prev) => {
      if (prev) {
        return (prev = false);
      } else {
        return (prev = true);
      }
    });
  };

  const changeEye = () => {
    if (eye) {
      return (
        <ion-icon
          onClick={handleClick}
          id="password-eye"
          name="eye-outline"
        ></ion-icon>
      );
    } else {
      return (
        <ion-icon
          onClick={handleClick}
          id="password-eye"
          name="eye-off-outline"
        ></ion-icon>
      );
    }
  };

  const changeTypePassword = () => {
    if (eye) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <div className="sign-up-container">
      <div className="logo">
        {/* <img src="../../../logo-emoji.png" alt="logo"></img> */}
      </div>
      <div className="create-account">Create your account</div>
      <div className="divider"></div>
      <div className="login-form">
        <form>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Email"></input>
          <div id="password-container">
            <input placeholder="Password" type={changeTypePassword()}></input>
            {changeEye()}
          </div>
          <input type="text" placeholder="Little Bio"></input>
          <input type="submit" value="Sign Up"></input>
        </form>
      </div>
      <div className="sign-up-in">
        Have an account?
        <a onClick={props.onclick} href="http://www.pudim.com.br/">
          Sign in!
        </a>
      </div>
    </div>
  );
}

export default Signup;
