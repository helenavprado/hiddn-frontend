import React, { useState } from "react";
import "./Settings.css";

function Settings(props) {
  const [profile, setProfile] = useState(false);
  const [inputData, setInputData] = useState("");
  const editProfile = () => {
    setProfile((prev) => (prev ? false : true));
  };

  const handleClick = () => {
    if (profile) {
      return (
        <div className="settings-sub-container">
          <input
            value={inputData}
            onChange={(event) => {
              setInputData(event.target.value);
            }}
            id="add-new-game-input"
          ></input>
          <ion-icon onClick={editProfile} name="checkmark-outline"></ion-icon>
        </div>
      );
    } else {
      return (
        <div className="settings-sub-container">
          <div>{inputData}</div>
          <ion-icon
            onClick={editProfile}
            id="menu-icon"
            name="create-outline"
          ></ion-icon>
        </div>
      );
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-title">{props.name}</div>
      {handleClick()}
    </div>
  );
}

export default Settings; //
