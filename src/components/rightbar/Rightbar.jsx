import React from 'react';
import "./rightbar.css";


const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src='/assets/gift.png' alt='birthdayImg' />
          <span className='birthdayText'>
            <b>Elvis Visinho</b>and <b>3 other friends</b> have premium cruise for us today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/person/Ultimate.png' alt='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src='/assets/person/KevinHart.jpg' alt='' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tony Nwude</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src='/assets/person/KevinHart.jpg' alt='' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tony Nwude</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src='/assets/person/KevinHart.jpg' alt='' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tony Nwude</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src='/assets/person/KevinHart.jpg' alt='' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tony Nwude</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src='/assets/person/KevinHart.jpg' alt='' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tony Nwude</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src='/assets/person/KevinHart.jpg' alt='' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tony Nwude</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
