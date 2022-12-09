import React from "react";

import "./MainPage.css";

import ChatSide from "../../molecules/ChatSide/ChatSide.js";
import ConversationsSide from "../../molecules/ConversationsSide/ConversationsSide.js";

function MainPage() {
  return (
    <div className="main-page-container">
      <div>
        <ConversationsSide></ConversationsSide>
      </div>
      <div>
        <ChatSide></ChatSide>
      </div>
    </div>
  );
}

export default MainPage;
