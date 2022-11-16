import React from "react";
import "./Settings.css";

function Settings(props) {
  const handleClick = () => {
    if (props.status) {
      return (
        <ion-icon onClick={props.onclick} name="checkmark-outline"></ion-icon>
      );
    } else {
      return (
        <ion-icon
          onClick={props.onclick}
          id="menu-icon"
          name="create-outline"
        ></ion-icon>
      );
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-title">{props.name}</div>
      <div className="settings-sub-container">
        <div>data</div>
        {handleClick()}
      </div>
    </div>
  );
}

export default Settings;
