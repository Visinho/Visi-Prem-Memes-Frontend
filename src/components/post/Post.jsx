import React from 'react';
import "./post.css";
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className='postTop'>
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt='1' />
                <span className="postUsername">
                  {Users.filter((u) => u.id === post?.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div> 
        <div className='postCenter'>
            <span className="postText">
                {post?.desc}
            </span>
            <img className='postImg' src='assets/person/indianman.JPG' alt='empty' />
        </div>
        <div className='postBottom'>
            <div className="postBottomLeft">
                <img className='likeIcon' src='assets/like.png' alt='Like' />
                <img className='likeIcon' src='assets/heart.png' alt='heart' />
                <span className='postLikeCounter'>Brains busted: {post.like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
