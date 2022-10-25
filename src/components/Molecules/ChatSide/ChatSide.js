import React from "react";
import "./ChatSide.css";
import ProfilePicture from "../../Atoms/ProfilePicture/ProfilePicture";

function ChatSide() {
  return (
    <div className="chat-side-container">
      <div className="chat-side-top-bar-container">
        <div className="profile-picture-and-name-container">
          <ProfilePicture></ProfilePicture>
          <div>
            Jennifer Aninston is{" "}
            <span id="real-name-person-chat">João Victor</span>
          </div>
        </div>
        <ion-icon id="icon" name="flame"></ion-icon>
      </div>
      <div className="conversartion-container"></div>
      <div className="chat-side-bottom-bar-container">
        <div>
          <i>
            chat expires in <span>24h</span>
          </i>
        </div>
        <div className="input-container">
          <ion-icon id="color-yellow" name="happy"></ion-icon>
          <input id="input-message" placeholder="Type message"></input>
          <ion-icon id="color-blue" name="send"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ChatSide;
