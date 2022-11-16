import React from "react";

import "./AddNewChat.css";

function AddNewChat(props) {
  return (
    <div>
      <div className="add-new-chat-big-container">
        <div className="add-new-chat-container ">
          <div className="add-new-chat-sub-container">
            <ion-icon name="person-circle-outline"></ion-icon>
            <div>New Game</div>
          </div>
          <div className="add-new-chat-sub-container"></div>
        </div>
      </div>
      <div className="add-new-chat-big-container">
        <div className="add-new-chat-container ">
          <div className="add-new-chat-sub-container">
            <ion-icon name="people-circle-outline"></ion-icon>
            <div>Group Chat</div>
          </div>
          <div className="add-new-chat-sub-container"></div>
        </div>
      </div>
    </div>
  );
}

export default AddNewChat;
