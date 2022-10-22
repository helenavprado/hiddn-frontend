import React from "react";
import ChatSide from "../../components/ChatSide/ChatSide";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page-container">
      <div></div>
      <div>
        <ChatSide></ChatSide>
      </div>
    </div>
  );
}

export default MainPage;
