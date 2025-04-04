import React from "react";
import "../styles/rightmenu.css";
import { FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/profile.jpg";
import { Link } from "react-router-dom";


function Rightmenu({isLoggedIn}) {
  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>
      
      <div className="profile">
        <i >
          <FaSun />
        </i>
        <i>
        <Link to="/settingbar"  >
          <FaCogs />
        </Link>
        </i>
        {isLoggedIn ? (  
          <Link to="/user" className="profileImage">  
            <img src={Profile} alt="Profile" />  
          </Link>  
        ) : (  
          <Link to="/login" className="profileImage"> <img src={Profile} alt="Profile" />  </Link>  
        )}  
      </div>
    </div>
  );
}

export default Rightmenu;
