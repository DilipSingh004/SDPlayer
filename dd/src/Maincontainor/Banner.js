import React from "react";
import art from "../img/art.png";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones,FaUsers } from "react-icons/fa";


function Banner({ onShowAbout,onShowAlbums,onshowReview }) {
  const handleAboutClick = (e) => {
    e.preventDefault();
    onShowAbout();
  };
  const handleAlbumsClick = (e) => {
    e.preventDefault();
    onShowAlbums();
  };

  const handleReviewClick = (e) => {
    e.preventDefault();
    onshowReview();
  };
  return (
    <div className="Banner">
     
      <img src={art} alt="" className="bannerImg" />

      <div className="content">
      <div className="menuList">
      <div className="name1">
              <h2 className="hh21">SD-Player</h2>
              <img className="check" src={check} alt="" />
            </div>
        <ul>
          <li>
            <a href="/">Songs</a>
          </li>
          <li>
            <a href="/" onClick={handleAlbumsClick}>Albums</a>
          </li>
          <li>
            <a href="/" onClick={handleReviewClick}>Fans/Review</a>
          </li>
          <li>
            <a href="/about" onClick={handleAboutClick}>About</a>
          </li>
        </ul>
        <i className="elss">
            <FaEllipsisH />
          </i>
      </div>
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <p>
              <i>
                <FaHeadphones style={{height:'15px'}} />
              </i>
              11,184,1811 <span>Monthly Listeners</span>
            </p>
            <p style={{color:'#00ffff'}}>
          <i style={{marginLeft:'20px',color:'#00ffff'}}>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
        </div>

        
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
