import React, { useContext, useRef, useState } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if(file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file)
      data.append("name", fileName);
      newPost.imgUrl = fileName;
      try {
        await axios.post("http://localhost:8080/api/upload", data)
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("http://localhost:8080/api/posts", newPost)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/default.jpg"
            }
            alt=""
          />
          <input
            placeholder={"Premium cruise..." + user.username + "???"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input type="file" style={{display: "none"}} id="file" accept=".png,.jpeg,.jpg" onChange={(e) =>setFile(e.target.files[0])}/>
            </label>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="red" className="shareIcon" />
              <span className="shareOptionText">React</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
};

export default Share;
