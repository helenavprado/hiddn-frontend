import React, { useEffect, useState } from "react";
import "./ChatSide.css";
import ProfilePicture from "../../Atoms/ProfilePicture/ProfilePicture";
import { useSelector } from "react-redux";
import MessageSent from "../../Atoms/ExchangedMessages/MessageSent";
import MessageReceived from "../../Atoms/ExchangedMessages/MessageReceived";
import EmojiPicker from "emoji-picker-react";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatSide({ socket, room, username }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [emojiPickerShown, setEmojiPicker] = useState(false);
  const [guessInput, setGuessInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [isGuessing, setIsGuessing] = useState(false);
  const [firstGuess, setFirstGuess] = useState(true);

  //async cause we want to wait for the message to be sent so we can update the state
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        username: username,
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
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const handleClickEmojiPicker = () => {
    setEmojiPicker((prev) => (prev ? false : true));
  };

  const character = useSelector((state) => state.newGame.characterName);
  const friend = useSelector((state) => state.newGame.friendName);
  // const user = useSelector((state) => state.newUser);

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
      } else if (!isGuessing && firstGuess) {
        return (
          <button onClick={handleClickIsGuessing} class="who-i-am-buttons">
            I know who I am!
          </button>
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
          <div id="return-answer"> 🏆 That's correct! You are {guessInput}</div>

          <button class="who-i-am-buttons">End game</button>
        </div>
      );
    }
  };

  //END OF TRY

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
