import React, { useState } from "react";
import Conversation from "../../Atoms/Conversation/Conversation";
import Menu from "../../Atoms/Menu/Menu";
import TextMenu from "../../Atoms/Menu/TextMenu";
import AddNewChat from "../../Atoms/AddNewChat/AddNewChat";
import AddFriend from "../../Atoms/AddFriend/AddFriend";
import Settings from "../../Atoms/Settings/Settings";

function ConversationsSide() {
  const [menuStatus, setMenuStatus] = useState("arrow-back-outline");

  const backToMenu = (event) => {
    setMenuStatus((prev) => event.target.name);
  };

  const menuOptionClicked = (event) => {
    setMenuStatus((prev) => event.target.name);
  };

  const showContent = () => {
    if (menuStatus === "arrow-back-outline") {
      return (
        <div>
          <Menu handleClick={menuOptionClicked}></Menu>
          <Conversation></Conversation>
        </div>
      );
    } else if (menuStatus === "chatbox-ellipses") {
      return (
        <div>
          <TextMenu backToMenu={backToMenu} titleName={"New Chat"}></TextMenu>
          <AddNewChat></AddNewChat>
          <Conversation></Conversation>
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
          <Conversation></Conversation>
        </div>
      );
    } else if (menuStatus === "settings") {
      return (
        <div>
          <TextMenu backToMenu={backToMenu} titleName={"Settings"}></TextMenu>
          <Settings name="Your name"></Settings>
          <Settings name="Your email"></Settings>
          <Settings name="Your bio"></Settings>
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
