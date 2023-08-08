import React from 'react';
import "./post.css";
import { MoreVert } from '@material-ui/icons';

const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className='postTop'>
            <div className="postTopLeft">
                <img className='postProfileImg' src='/assets/person/default.jpg' alt='image' />
                <span className="postUsername">Visinho</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className='postCenter'>
            <span className="postText">
                Remember to stay violent!!!
            </span>
            <img className='postImg' src='assets/post/1.jpeg' alt='' />
        </div>
        <div className='postBottom'>
            <div className="postBottomLeft">
                <img className='likeIcon' src='assets/like.png' alt='Like' />
                <img className='likeIcon' src='assets/heart.png' alt='heart' />
                <span className='postLikeCounter'>Brains busted: 7</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">7 Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
