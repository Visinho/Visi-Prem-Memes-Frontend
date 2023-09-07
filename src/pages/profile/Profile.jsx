import React, { useCallback, useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
import axios from "axios";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  const fetchUser = useCallback(() => {
    // Your fetch logic here
    axios.get(`http://localhost:8080/api/users?username=ElvisVisinho`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }, []); 

  useEffect(() => {
    fetchUser();
  }, [fetchUser]); 

  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={`${PF}post/3.jpeg`}
              alt=""
            />
            <img
              className="profileUserImg"
              src={`${PF}person/7.jpeg`}
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed username="ElvisVisinho"/>
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
  );
};

export default Profile;
