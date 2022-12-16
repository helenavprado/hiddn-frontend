import React, { useState, useEffect } from "react";
import { setRoomCurrentState } from "../../slices/Room/RoomSlice";
import { getUserRooms } from "../../services/http/HttpService";

import ProfilePicutre from "../ProfilePicture/ProfilePicture";
import store from "../../../store";

import "./Conversation.css";

function Conversation({ userIdentifier }) {
  const [rooms, setRooms] = useState([]);

  const getRooms = (userIdentifier) => {
    return getUserRooms(userIdentifier);
  }

  const setChat = (room) => {
    store.dispatch(setRoomCurrentState(room));
  }

  useEffect(() => {
    setRooms(getRooms(userIdentifier));
  }, []);

  return (
    <div>
      {rooms.map(room => {
        return (
          <div className="big-container" onClick={() => setChat(room)}>
            <div className="conversation-container">
              <div className="conversation-sub-container">
                <ProfilePicutre pictureUrl={room.chatPicture}></ProfilePicutre>
                <div>{room.chatName}</div>
              </div>
              <div className="conversation-sub-container">
                <div className="notification"></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Conversation;