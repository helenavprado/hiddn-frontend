import React, {useState, useEffect} from "react";

import { useSelector } from "react-redux";
import { 
  checkUserExistence, 
  saveUserToBackend,
  getUserData
} from "../../services/http/HttpService";

import 
import ConversationsSide from "../../molecules/ConversationsSide/ConversationsSide";

import "./MainPage.css";

function MainPage({ socket }) {
  const user = useSelector(state => state.newUser);

  const initializeUser = () => {
    if(user.keycloakIdentifier !== '' && !checkUserExistence(user.keycloakIdentifier)) {
      const userPayload = {
        userFirstName: user.userFirstName,
        userLastName: user.userLastName,
        userPicture: user.userPicture,
        userEmail: user.userEmail,
        userKeycloakIdentifier: user.keycloakIdentifier
      }
      saveUserToBackend(userPayload);
      getUserData(user.keycloakIdentifier);
      
    } else if (user.keycloakIdentifier !== '' && checkUserExistence(user.keycloakIdentifier)) {
      getUserData(user.keycloakIdentifier);
    }
  }

  useEffect(() => {
    initializeUser()
  });
  
  return (
    <div className="main-page-container">
      <div>
        <ConversationsSide></ConversationsSide>
      </div>
      <div>
        <ChatSide socket={socket} username={user.userEmail}></ChatSide>
      </div>
    </div>
  );
}

export default MainPage;
