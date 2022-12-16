import React from "react";
import { useSelector } from "react-redux";

import ProfilePicture from "../ProfilePicture/ProfilePicture";

import "./Menu.css";

function Menu(props) {
  const user = useSelector(state => state.newUser)

  return (
    <div className="conversation-side-top-bar-container">
      <ProfilePicture pictureUrl={user.userPicture}> </ProfilePicture>
      <div className="icons-container-menu">
        <ion-icon
          id="menu-icon"
          onClick={props.handleClick}
          name="game-controller-sharp"
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
        <ion-icon
          id="menu-icon"
          onClick={props.handleClick}
          name="log-out"
        ></ion-icon>
      </div>
    </div>
  );
}

export default Menu;
