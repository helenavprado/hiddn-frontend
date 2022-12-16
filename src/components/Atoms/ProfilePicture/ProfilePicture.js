import React from "react";

import "./ProfilePicture.css";

function ProfilePicture({ pictureUrl }) {
  return (
    <img
      alt="this is a pic"
      className="profile-picture"
      src={pictureUrl}
    ></img>
  );
}

export default ProfilePicture;
