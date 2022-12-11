import React from "react";

import "./MainPage.css";

import ChatSide from "../../Molecules/ChatSide/ChatSide";
import ConversationsSide from "../../Molecules/ConversationsSide/ConversationsSide";

function MainPage({ socket, room, username }) {
  return (
    <div className="main-page-container">
      <div>
        <ConversationsSide></ConversationsSide>
      </div>
      <div>
        <ChatSide socket={socket} room={room} username={username}></ChatSide>
      </div>
    </div>
  );
}

export default MainPage;
//.
