import React from "react";
import "FriendStartedNewGame.css";

function FriendStartedNewGame() {
  return (
    <div>
      <div id="return-answer">
        USER started a new game with you. Who will USER be?
      </div>
      <input
        id="guess-who-im-input"
        placeholder="A famous person? A character?"
      ></input>
      <button class="who-i-am-buttons">Start!</button>
    </div>
  );
}

export default FriendStartedNewGame;
