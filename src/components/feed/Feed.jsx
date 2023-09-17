import React, { useContext, useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import { Posts } from "../../dummyData.js";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const endpoint = username
        ? `http://localhost:8080/api/posts/profile/${username}`
        : `http://localhost:8080/api/posts/timeline/${user._id}`;
        
      try {
        const res = await axios.get(endpoint);
        setPosts(res.data);
      } catch (error) {
        if (error.response) {
          console.error("Server error:", error.response.status, error.response.data);
        } else if (error.request) {
          console.error("No response from server:", error.request);
        } else {
          console.error("Request error:", error.message);
        }
      }
    };
    fetchPosts();
  }, [username, user._id]);
  
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
