import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
// import { Posts } from "../../dummyData.js";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  console.log({username});
  useEffect(() => {
    const fetchPosts = async () => {
      const endpoint = username
        ? `http://localhost:8080/api/posts/profile/${username}`
        : `http://localhost:8080/api/posts/timeline/64d82a0d0db56dfde378c48e`;
        
      try {
        const res = await axios.get(endpoint);
        setPosts(res.data);
        console.log(res.data)
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
  }, [username]);
  
  

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
