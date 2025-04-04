import React from 'react';  
import '../styles/about.css'; // Import your CSS file for styling  

const About = () => {  
    return (  
        <div className="aboutContainer">  
      <h1>About SD-Player</h1>  
      <p>  
        Welcome to SD-Player, your ultimate destination for music streaming!  
        We provide a vast library of tracks from a variety of genres and artists.  
      </p>  
      <h2>Features</h2>  
      <ul>  
        <li>Stream your favorite songs anytime, anywhere.</li>  
        <li>Create and share playlists with friends.</li>  
        <li>Discover new music tailored to your taste.</li>  
        <li>Follow artists and keep up with their latest releases.</li>  
        <li>Enjoy high-quality audio streaming.</li>  
      </ul>  
      <h2>Our Team</h2>  
      <p>  
        SD-Player is developed by a passionate team of music lovers dedicated  
        to bringing you the best listening experience.  
      </p>  
      <h2>Contact Us</h2>  
      <p>If you have any questions, feel free to reach out at support@sdplayer.com.</p>  
      <p>Thank you for using SD-Player!</p>  
    </div>  
    );  
};  

export default About;