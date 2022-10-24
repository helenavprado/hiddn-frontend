/* Component renderes when user clicks on "New Group", "Add a friend", "Settings" or 
"Guess the hidden person"*/
import "./TextMenu.css";

import React from "react";

function TextMenu(props) {
  return (
    <div className="text-container-menu">
      <ion-icon onClick={props.backToMenu} name="arrow-back-outline"></ion-icon>
      <div>{props.titleName}</div>
    </div>
  );
}

export default TextMenu;
