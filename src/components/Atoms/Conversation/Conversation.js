import React from "react";
import ProfilePicutre from "../ProfilePicture/ProfilePicture";
import "./Conversation.css";

function Conversation() {
  return (
    <div className="big-container">
      <div className="conversation-container">
        <div className="conversation-sub-container">
          <ProfilePicutre></ProfilePicutre>
          <div>Lady Gaga</div>
        </div>
        <div className="conversation-sub-container">
          <div className="notification"></div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
