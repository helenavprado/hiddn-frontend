import React, { useState } from "react";
import Login from "../components/HomePage/Login";
import Signup from "../components/HomePage/Signup";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="container">
      <Signup></Signup>
      <div className="image">
        Hid<span id="d-different">d</span>en
      </div>
    </div>
  );
}

export default LoginPage;
