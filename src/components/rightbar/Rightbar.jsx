import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Owerri</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Owerri</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Situationship:</span>
            <span className="rightbarInfoValue">Confused</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/default.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elvis Visinho</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
