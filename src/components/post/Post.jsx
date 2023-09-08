import React, { useCallback, useEffect, useState } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const fetchUser = useCallback(() => {
    // Your fetch logic here
    axios.get(`http://localhost:8080/api/users?userId=${post.userId}`)
      .then(response => {
        setUser(response.data);
        console.log("post.userId:", post.userId);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }, [post.userId]); 

  console.log("user", user)

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`http://localhost:8080/api/users/${post.userId}`);
  //     setUser(res.data)
  //     console.log(res.data)
  //   };
  //   fetchUser();
  // }, [post.userId])

  const LikeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
            <img
              className="postProfileImg"
              src={user.profilePic || PF+'person/default.jpg'}
              alt=""
            />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img
            className="postImg"
            src={PF+post.imgUrl}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              alt="Like"
              onClick={LikeHandler}
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              alt="heart"
              onClick={LikeHandler}
            />
            <span className="postLikeCounter">Brains busted: {like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
