import React from "react";
import ChatSide from "../../components/Molecules/ChatSide/ChatSide";
import "./MainPage.css";
import ConversationsSide from "../../components/Molecules/ConversationsSide/ConversationsSide";

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
