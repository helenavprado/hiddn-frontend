import React, { useEffect, useState } from "react";
import "./ChatSide.css";
import ProfilePicture from "../../atoms/ProfilePicture/ProfilePicture";
import { useSelector } from "react-redux";
import MessageSent from "../../atoms/ExchangedMessages/MessageSent";
import MessageReceived from "../../atoms/ExchangedMessages/MessageReceived";
import EmojiPicker from "emoji-picker-react";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatSide({ socket, username }) {
  const [message, setMessage] = useState("");
  //pass window.localStorage.getItem("key") inside the useState below
  const [messageList, setMessageList] = useState([]);
  const [emojiPickerShown, setEmojiPicker] = useState(false);
  const [guessInput, setGuessInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [isGuessing, setIsGuessing] = useState(false);
  const [firstGuess, setFirstGuess] = useState(true);

  const room = useSelector((state) => state.newRoom);

  //async cause we want to wait for the message to be sent so we can update the state
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        username: username,
        room: room.chatIdentifier,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
      //local storage
      const obj = {
        room: {
          message: messageList,
        },
      };
      window.localStorage.setItem("key", obj);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
      //local storage
      const obj = {
        room: {
          message: messageList,
        },
      };
      window.localStorage.setItem("key", obj);
    });
  }, [socket]);

  useEffect(() => {
    socket.emit("join_room", room.chatIdentifier);
  }, []);

  useEffect(() => {
    setMessageList([]);
    socket.emit("join_room", room.chatIdentifier);
  }, [room]);

  const handleClickEmojiPicker = () => {
    setEmojiPicker((prev) => (prev ? false : true));
  };

  //TRYING AGAIN
  const sendGuessClick = () => {
    if (guessInput === "Spongebob") {
      setGameOver(true);
    } else {
      setIsGuessing(false);
      setFirstGuess(false);
    }
  };

  const handleClickIsGuessing = () => {
    setIsGuessing(true);
  };

  const showInput = () => {
    if (!gameOver) {
      if (isGuessing) {
        return (
          <div>
            <input
              id="guess-who-im-input"
              onChange={(event) => {
                setGuessInput(event.target.value);
              }}
            ></input>
            <button class="who-i-am-buttons" onClick={sendGuessClick}>
              Send
            </button>
          </div>
        );
      } else if (!isGuessing && !firstGuess) {
        return (
          <div>
            <div id="return-answer">Not quite right!</div>
            <button
              onClick={() => setIsGuessing(true)}
              class="who-i-am-buttons"
            >
              Try again
            </button>
          </div>
        );
      }
    } else {
      return (
        <div>
          <div id="return-answer">That's correct! You are {guessInput}</div>
          <button class="who-i-am-buttons">End game</button>
        </div>
      );
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
          <ProfilePicture pictureUrl={room.chatPicture}></ProfilePicture>
          <div>{room.chatName}</div>
        </div>
        {showInput()}
      </div>

      <div className="chat-container">
        <ScrollToBottom className="scroll-to-bottom-cointainer">
          {messageList.map((messageContent) => {
            if (username === messageContent.username) {
              return (
                <MessageSent message={messageContent.message}></MessageSent>
              );
            } else {
              return (
                <MessageReceived
                  message={messageContent.message}
                ></MessageReceived>
              );
            }
          })}
        </ScrollToBottom>
      </div>

      <div className="chat-side-bottom-bar-container">
        {showEmojiPicker()}
        <div className="input-container" id="messageForm">
          <ion-icon
            id="color-yellow"
            name="happy"
            onClick={handleClickEmojiPicker}
          ></ion-icon>
          <input
            id="input-message"
            placeholder="Type message"
            type="text"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          ></input>
          <ion-icon
            id="color-blue"
            type="submit"
            name="send"
            onClick={sendMessage}
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ChatSide;
//.
