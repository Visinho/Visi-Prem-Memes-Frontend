import React from 'react';
import "./friends.css";

const Friends = ({ user }) => {
  return (
    <div>
      <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src={user.profilePicture} alt='1' />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    </div>
  )
}

export default Friends
