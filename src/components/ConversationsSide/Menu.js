import React from "react";
import ProfilePicutre from "../Molecules/ProfilePicure";
import "./Menu.css";

function Menu() {
  return (
    <div className="conversation-side-top-bar-container">
      <ProfilePicutre></ProfilePicutre>
      <div className="icons-container-menu">
        <ion-icon name="chatbox-ellipses"></ion-icon>
        <ion-icon name="person-add"></ion-icon>
        <ion-icon name="settings"></ion-icon>
      </div>
    </div>
  );
}

export default Menu;
