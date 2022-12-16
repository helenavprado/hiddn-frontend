import React from "react";
import "./Settings.css";

function Settings(props) {
  return (
    <div className="settings-container">
      <div className="settings-title">{props.name}</div>
      <div className="settings-sub-container">
        <div>{props.data}</div>
      </div>
    </div>
  );
}

export default Settings; //
