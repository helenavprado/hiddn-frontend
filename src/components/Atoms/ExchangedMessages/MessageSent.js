import React from "react";
import "./ExchangedMessages.css";

function MessageSent(props) {
  return (
    <div className="messages sending">
      <div className="message">{props.mensagem}</div>
    </div>
  );
}

export default MessageSent;
