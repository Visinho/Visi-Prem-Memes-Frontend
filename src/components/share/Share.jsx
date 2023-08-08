import React from 'react';
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'; 

const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src='/assets/person/default.jpg' alt='' />
            <input placeholder='Premium cruise...???' className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor='red' className='shareIcon'/>
                    <span className='shareOptionText'>React</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor='goldenrod' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
            </div>
            <button className="shareButton">
                Share
            </button>
        </div>
      </div>
    </div>
  )
}

export default Share
