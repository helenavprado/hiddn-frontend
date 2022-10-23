import React from "react";
import Conversation from "../Molecules/Conversation/Conversation";
import Menu from "./Menu";

function ConversationsSide() {
  return (
    <div>
      <Menu></Menu>
      {/* App.js fetches the data and updates the state, 
      then pass the state via props to Main Page, 
      which passes it to ConversationsSide which .map 
      to render each conversation according to 
      the number os conversations */}
      <Conversation></Conversation>
    </div>
  );
}

export default ConversationsSide;
