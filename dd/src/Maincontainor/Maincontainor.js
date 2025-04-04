import React, {useEffect,useState } from "react";
import "../styles/maincontainor.css";

import  AudioList  from "./Audiolist";
import { Banner } from "./Banner";
import About from '../Maincontainor/About'
import Albums from '../Maincontainor/Albums'
import Review from '../Maincontainor/FansReview'



function Maincontainor() {
  const [currentComponent, setCurrentComponent] = useState("AudioList");

  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  const handleShowAbout = () => {  
    setCurrentComponent("About");
};  
 const handleshowalbums=()=>{
  setCurrentComponent("Albums");
 }
 const handleShowReview = () => {  
  setCurrentComponent("Review");

};  
  return (
    <div className="mainContainer">
      
      <Banner onShowAbout={handleShowAbout} onShowAlbums={handleshowalbums} onshowReview={handleShowReview} />
      
     
    {currentComponent === "About" && <About />}
      {currentComponent === "Albums" && <Albums />}
      {currentComponent === "AudioList" && <AudioList />}
      {currentComponent === "Review" && <Review />}

    </div>
  );
}

export default Maincontainor;
