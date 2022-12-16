import React, { useState } from "react";
import { useSelector } from "react-redux";
import { keycloakLogout } from "../../services/keycloak/KeycloakService.js";

import Conversation from "../../atoms/Conversation/Conversation";
import Menu from "../../atoms/Menu/Menu";
import TextMenu from "../../atoms/Menu/TextMenu";
import AddFriend from "../../atoms/AddFriend/AddFriend";
import Settings from "../../atoms/Settings/Settings";
import AddNewGame from "../AddNewGame/AddNewGame";

function ConversationsSide() {
  const [menuStatus, setMenuStatus] = useState("arrow-back-outline");
  const user = useSelector(state => state.newUser);

  const backToMenu = (event) => {
    setMenuStatus((prev) => event.target.name);
  };

  const menuOptionClicked = (event) => {
    setMenuStatus((prev) => event.target.name);
  };

  const showContent = (menuName) => {
    switch (menuName) {
      case "arrow-back-outline":
        return (
          <div>
            <Menu handleClick={menuOptionClicked}></Menu>
            <Conversation userIdentifier={user.userIdentifier}></Conversation>
          </div>
        );

      case "game-controller-sharp":
        return (
          <div>
            <TextMenu backToMenu={backToMenu} titleName={"New Chat"}></TextMenu>
            <AddNewGame handleClick={menuOptionClicked}></AddNewGame>
          </div>
        );

      case "person-add":
        return (
          <div>
            <TextMenu backToMenu={backToMenu} titleName={"Add a Friend"}></TextMenu>
            <AddFriend></AddFriend>
          </div>
        );

      case "settings":
        return (
          <div>
            <TextMenu backToMenu={backToMenu} titleName={"Settings"}></TextMenu>
            <Settings name="Your name" data={`${user.userFirstName} ${user.userLastName}`}></Settings>
            <Settings name="Your email" data={user.userEmail}></Settings>
            <Settings name="Your id" data={user.userIdentifier}></Settings>
          </div>
        );

      case "person-circle-outline":
        return (
          <div><TextMenu backToMenu={backToMenu} titleName={"Add New Game"}></TextMenu></div>
        );

      case "log-out":
        return keycloakLogout();

      default:
        break;
    }
  };

  return <div>{showContent(menuStatus)}</div>;
}

export default ConversationsSide;
