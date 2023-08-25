import React from "react";
import "./friends.css";

const Friends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="1" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
