import React, { useState } from "react";
import Login from "../../components/Molecules/HomePage/Login";
import Signup from "../../components/Molecules/HomePage/Signup";
import "./LoginPage.css";

function LoginPage() {
  const [login, setLogin] = useState(false);

  const handleClick = (event) => {
    setLogin((prev) => {
      if (prev) {
        return (prev = false);
      } else {
        return (prev = true);
      }
    });
    event.preventDefault();
  };

  const changePage = () => {
    if (login) {
      return <Signup onclick={handleClick}></Signup>;
    } else {
      return <Login onclick={handleClick}></Login>;
    }
  };

  return (
    <div className="container">
      {changePage()}
      <div className="blue-background">
        Hidd<span id="d-different">e</span>n
      </div>
    </div>
  );
}

export default LoginPage;
