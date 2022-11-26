import React, { useState } from "react";
import { keycloakLogout } from "../../../services/keycloak/KeycloakService.js";

import Conversation from "../../Atoms/Conversation/Conversation";
import Menu from "../../Atoms/Menu/Menu";
import TextMenu from "../../Atoms/Menu/TextMenu";
import AddNewChat from "../../Atoms/AddNewChat/AddNewChat";
import AddFriend from "../../Atoms/AddFriend/AddFriend";
import Settings from "../../Atoms/Settings/Settings";
import AddNewGame from "../AddNewGame/AddNewGame";

function ConversationsSide() {
  const [menuStatus, setMenuStatus] = useState("arrow-back-outline");
  const [profile, setProfile] = useState(true);

  const backToMenu = (event) => {
    setMenuStatus((prev) => event.target.name);
  };

  const menuOptionClicked = (event) => {
    setMenuStatus((prev) => event.target.name);
  };

  const editProfile = () => {
    setProfile((prev) => (prev ? false : true));
  };

  const showContent = () => {
    if (menuStatus === "arrow-back-outline") {
      return (
        <div>
          <Menu handleClick={menuOptionClicked}></Menu>
          <Conversation></Conversation>
        </div>
      );
    } else if (menuStatus === "game-controller-sharp") {
      return (
        <div>
          <TextMenu backToMenu={backToMenu} titleName={"New Chat"}></TextMenu>
          <AddNewGame handleClick={menuOptionClicked}></AddNewGame>
        </div>
      );
    } else if (menuStatus === "person-add") {
      return (
        <div>
          <TextMenu
            backToMenu={backToMenu}
            titleName={"Add a Friend"}
          ></TextMenu>
          <AddFriend></AddFriend>
        </div>
      );
    } else if (menuStatus === "settings") {
      return (
        <div>
          <TextMenu backToMenu={backToMenu} titleName={"Settings"}></TextMenu>
          <Settings
            onclick={editProfile}
            status={profile}
            name="Your name"
          ></Settings>
          <Settings
            onclick={editProfile}
            status={profile}
            name="Your email"
          ></Settings>
          <Settings
            onclick={editProfile}
            status={profile}
            name="Your bio"
          ></Settings>
          <button onClick={keycloakLogout()}>Logout</button>
        </div>
      );
    } else if (menuStatus === "person-circle-outline") {
      return (
        <div>
          <TextMenu
            backToMenu={backToMenu}
            titleName={"Add New Game"}
          ></TextMenu>
        </div>
      );
    }
  };

  return (
    <div>
      {showContent()}

      {/* App.js fetches the data and updates the state, 
      then pass the state via props to Main Page, 
      which passes it to ConversationsSide which .map 
      to render each conversation according to 
      the number os conversations */}
    </div>
  );
}

export default ConversationsSide;
