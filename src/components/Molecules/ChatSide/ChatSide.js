import React, { useEffect, useState } from "react";
import "./ChatSide.css";
import ProfilePicture from "../../Atoms/ProfilePicture/ProfilePicture";
import { useSelector } from "react-redux";
import MessageSent from "../../Atoms/ExchangedMessages/MessageSent";
import MessageReceived from "../../Atoms/ExchangedMessages/MessageReceived";
import EmojiPicker from "emoji-picker-react";

function ChatSide({ socket, room }) {
  const [guess, setGuess] = useState(true);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [emojiPickerShown, setEmojiPicker] = useState(false);

  const handleClick = () => {
    setGuess((prev) => (prev ? false : true));
  };
  //async cause we want to wait for the message to be sent so we can update the state
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: room,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);

      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  // const showMessage = () => {
  //   return messageList.map((messageContent) => {
  //     return <MessageSent message={messageContent.message}></MessageSent>;
  //   })
  // };

  const handleClickEmojiPicker = () => {
    setEmojiPicker((prev) => (prev ? false : true));
  };

  const character = useSelector((state) => state.newGame.characterName);
  const friend = useSelector((state) => state.newGame.friendName);
  // const user = useSelector((state) => state.newUser);

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

  const showEmojiPicker = () => {
    if (emojiPickerShown) {
      return <EmojiPicker></EmojiPicker>;
    }
  };

  return (
    <div className="chat-side-container">
      <div className="chat-side-top-bar-container">
        <div className="profile-picture-and-name-container">
          <ProfilePicture></ProfilePicture>
          <div>
            {friend} is <span id="real-name-person-chat">{character}</span>
          </div>
        </div>
        {showInput()}
      </div>
      {/* CHAT HERE */}
      <div className="chat-container ">
        {messageList.map((messageContent) => {
          return <MessageSent message={messageContent.message}></MessageSent>;
        })}
      </div>
      <div className="chat-side-bottom-bar-container">
        <div>
          <i>
            chat expires in <span>24h</span>
          </i>
        </div>
        {showEmojiPicker()}
        <form className="input-container" id="messageForm" method="POST">
          <ion-icon
            id="color-yellow"
            name="happy"
            onClick={handleClickEmojiPicker}
          ></ion-icon>
          <input
            id="input-message"
            placeholder="Type message"
            type="text"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></input>
          <ion-icon
            id="color-blue"
            type="submit"
            name="send"
            onClick={sendMessage}
          ></ion-icon>
        </form>
      </div>
    </div>
  );
}

export default ChatSide;
//.
