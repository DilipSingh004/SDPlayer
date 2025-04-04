import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Leftmenu } from "./leftmenu/Leftmenu";
import Maincontainer from "./Maincontainor/Maincontainor";
import RightMenu from "./rightmenu/Rightmenu";
import Login from "./Maincontainor/Login";
import SettingBar from "../src/rightmenu/SettingsBar";
import Userpage from "./Maincontainor/Userpage";
import React, { useState } from "react";
import Discover from "./component/Discover";
import Podcasts from "./component/Podcasts";
import  Radio  from "../src/component/Radio";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));
  return (
      <div className="App">
        <Leftmenu />

        <div className="background"></div>
        <Routes>
          <Route path="/" element={<Maincontainer />} />
          <Route path="/settingbar" element={<SettingBar />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Userpage email={userEmail} />
              ) : (
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setUserEmail={setUserEmail}
                />
              )
            }
          />
          <Route path="/user/:email" element={<Userpage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/radio" element={<Radio />} />
        </Routes>
        <RightMenu isLoggedIn={isLoggedIn} />
      </div>
  );
};

export default App;
