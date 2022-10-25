import React from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import "./Menu.css";

function Menu(props) {
  return (
    <div className="conversation-side-top-bar-container">
      <ProfilePicture></ProfilePicture>
      <div className="icons-container-menu">
        <ion-icon
          id="menu-icon"
          onClick={props.handleClick}
          name="chatbox-ellipses"
        ></ion-icon>
        <ion-icon
          id="menu-icon"
          onClick={props.handleClick}
          name="person-add"
        ></ion-icon>
        <ion-icon
          id="menu-icon"
          onClick={props.handleClick}
          name="settings"
        ></ion-icon>
      </div>
    </div>
  );
}

export default Menu;
