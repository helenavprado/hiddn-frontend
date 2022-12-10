import React from "react";
import { useSelector } from "react-redux";

import "./ProfilePicture.css";

function ProfilePicture() {
  const user = useSelector(state => state.newUser)

  return (
    <img
      alt="this is a pic"
      className="profile-picture"
      src={user.userPicture}
    ></img>
  );
}

export default ProfilePicture;
