import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/gift.png"
            alt="birthdayImg"
          />
          <span className="birthdayText">
            <b>Elvis Visinho</b>and <b>3 other friends</b> have premium cruise
            for us today
          </span>
        </div>
        <img
          className="rightbarAd"
          src="/assets/person/Ultimate.png"
          alt="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
