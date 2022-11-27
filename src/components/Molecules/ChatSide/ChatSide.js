import React, { useState } from "react";
import "./ChatSide.css";
import ProfilePicture from "../../Atoms/ProfilePicture/ProfilePicture";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../../features/testeRedux";

function ChatSide() {
  const [guess, setGuess] = useState(true);

  const handleClick = () => {
    setGuess((prev) => (prev ? false : true));
  };

  const dispatch = useDispatch();
  const change = useSelector((state) => state.changeName.value);

  const showInput = () => {
    if (guess) {
      return (
        <div>
          <input id="guess-who-im-input"></input>
          <button onClick={handleClick}>Send</button>
        </div>
      );
    } else {
      return <button onClick={handleClick}>Guess Who I am</button>;
    }
  };

  return (
    <div className="chat-side-container">
      <div className="chat-side-top-bar-container">
        <div className="profile-picture-and-name-container">
          <ProfilePicture></ProfilePicture>
          <div>
            <button onClick={() => dispatch(changeName())}></button>
            {change} <span id="real-name-person-chat">Patrick Star</span>
          </div>
        </div>
        {showInput()}
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
