import React from "react";
import "./ExchangedMessages.css";

function MessageReceived(props) {
  return (
    <div className="messages receiving">
      <div className="message">{props.message}</div>
    </div>
  );
}

export default MessageReceived;
