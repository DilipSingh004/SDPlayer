import React from 'react';  
import {  FaEllipsisH } from "react-icons/fa";  
import { LuKeyboardMusic } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";  
import '../styles/leftmenu.css';  
import { Menu } from "./Menu";  
import { MenuList } from "./Menulist";  
import { Menuplaylist } from "./Menuplaylist";  
import TrackList from "./Tracklist";  

function Leftmenu() {  
  return (  
    <div className="leftMenu">  
      <div className="logoContainer">  
        <div className="logo">  
          <i>  
          <LuKeyboardMusic /> 
          </i>  
          <h2>SD Player</h2>  
        </div>  
        <i>  
          <FaEllipsisH />  
        </i>  
      </div>  

      <div className="searchBox">  
        <input type="text" placeholder="Search..." />  
        <i>  
          <BiSearchAlt />  
        </i>  
      </div>  
      <Menu title={"Menu"} listObject={MenuList} />  
      <Menuplaylist />  
      <TrackList />  
    </div>  
  );  
}  

export { Leftmenu };