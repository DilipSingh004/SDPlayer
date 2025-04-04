import React, { useState } from "react";
import "../styles/rightmenu.css";
import { TiCancelOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const SettingsBar=()=> {
    const [settings, setSettings] = useState({
      theme: "light",
      volume: 50,
      autoplay: false,
      notifications: true,
    });
  
    const handleThemeChange = (e) => {
      setSettings({ ...settings, theme: e.target.value });
    };
  
    const handleVolumeChange = (e) => {
      setSettings({ ...settings, volume: e.target.value });
    };
  
    const handleAutoplayChange = (e) => {
      setSettings({ ...settings, autoplay: e.target.checked });
    };
  
    const handleNotificationsChange = (e) => {
      setSettings({ ...settings, notifications: e.target.checked });
    };
  
    return (
      <div className="settings-container">
        <Link to="/" className="cancel">  <h1 className="head">Settings </h1> 
        <TiCancelOutline className='ico1' size={30} color="#00ffff " /> </Link>
        <form>
          <div className="setting">
            <label>Theme:</label>
            <select value={settings.theme} onChange={handleThemeChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="setting">
            <label>Volume:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={settings.volume}
              onChange={handleVolumeChange}
            />
            <span>{settings.volume}%</span>
          </div>
          <div className="setting">
            <label>Autoplay:</label>
            <input
              type="checkbox"
              checked={settings.autoplay}
              onChange={handleAutoplayChange}
            />
          </div>
          <div className="setting">
            <label>Notifications:</label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={handleNotificationsChange}
            />
          </div>
          <button className="setting" type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
  export default SettingsBar;