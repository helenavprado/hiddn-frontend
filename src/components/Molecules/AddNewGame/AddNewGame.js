import React, { useState } from "react";
import "./AddNewGame.css";
import {
  setCharacter,
  chooseFriend,
} from "../../../features/setCharacterSlice";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

//decode

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
let decoded = jwt_decode(token);
console.log(decoded.name);

console.log(decoded);

function AddNewGame(props) {
  const dispatch = useDispatch();
  const [characterName, setCharacterName] = useState("");
  const [friend, setFriend] = useState("");

  const getCharacterName = (event) => {
    setCharacterName(event.target.value);
  };

  const getFriendName = (event) => {
    setFriend(event.target.value);
  };

  // const handleClick = () => {
  //   dispatch(setCharacter(characterName)
  //   dispatch(chooseFriend(friendName)
  // }

  return (
    <div className="add-new-game-container">
      <div className="add-new-game-title">Who do you want to play with?</div>
      <div className="add-new-game-sub-container">
        <input
          onChange={getFriendName}
          id="add-new-game-input"
          placeholder="Search for a friend"
        ></input>
      </div>
      <div id="list-of-friends">list of friends</div>
      <div className="add-new-game-title">Who will this person be?</div>
      <div className="add-new-game-sub-container">
        <input
          onChange={getCharacterName}
          id="add-new-game-input"
          placeholder="Jennifer Aninston, Spongebob, Bill Gates..."
        ></input>
      </div>
      <button
        id="add-new-game-button"
        onClick={() => dispatch(chooseFriend(friend))}
      >
        Start new game
      </button>
    </div>
  );
}

export default AddNewGame;
