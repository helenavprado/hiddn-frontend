import React from "react";
import "./AddNewGame.css";

function AddNewGame(props) {
  return (
    <div className="add-new-game-container">
      <div className="add-new-game-title">Who do you want to play with?</div>
      <div className="add-new-game-sub-container">
        <input
          id="add-new-game-input"
          placeholder="Search for a friend"
        ></input>
      </div>
      <div id="list-of-friends">list of friends</div>
      <div className="add-new-game-title">Who will this person be?</div>
      <div className="add-new-game-sub-container">
        <input
          id="add-new-game-input"
          placeholder="Jennifer Aninston, Spongebob, Bill Gates..."
        ></input>
      </div>
      <button id="add-new-game-button">Start new game</button>
    </div>
  );
}

export default AddNewGame;
