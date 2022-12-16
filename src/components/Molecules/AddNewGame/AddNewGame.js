import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserFriends, getFriendWithEmailLike } from "../../services/http/HttpService.js";
import { useDispatch } from "react-redux";
import { setUserFriends } from "../../slices/User/UserSlice.js";

import "./AddNewGame.css";

function AddNewGame(props) {
  const [friends, setFriends] = useState([]);
  const [targetFriendEmail, setTargetFriendEmail] = useState("");
  const user = useSelector(state => state.newUser);
  const dispatch = useDispatch();

  const getFriends = (userIdentifier) => {
    let userFriends = getUserFriends(userIdentifier);
    return userFriends
  };

  const getTargetFriendInput = (input) => {
    setTargetFriendEmail(input);
  }

  const createChat = (targetFriendEmail) => {
    let targetFriendData = getFriendWithEmailLike(user.userIdentifier, targetFriendEmail);
    console.log("target friend")
    console.log(targetFriendData)
    setTargetFriendEmail("")
  }

  useEffect(() => {
    let listOfFriends = getFriends(user.userIdentifier);
    setFriends(listOfFriends);
    console.log("Friends no user effect")
    console.log(friends)
    dispatch(setUserFriends(listOfFriends));
  }, []);

  return (
    <div className="add-new-game-container">
      <div className="add-new-game-title">Who do you want to talk with?</div>
      <div className="add-new-game-sub-container">
        <input value={targetFriendEmail} onChange={(e) => getTargetFriendInput(e.target.value)} id="add-new-game-input" placeholder="Enter your friend's e-mail"></input>
      </div>
      {/* {console.log(friends)} */}
      <button id="add-new-game-button" onClick={() => createChat(targetFriendEmail)}>Start New Chat</button>
    </div>
  );
}

export default AddNewGame;
