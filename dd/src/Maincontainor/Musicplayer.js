import React, { useState, useRef, useEffect } from "react";
import "../styles/musicplayer.css";
import '../styles/leftmenu.css';


// import Tracklist from '../leftmenu/Tracklist'; 
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload, BsFillVolumeUpFill } from "react-icons/bs";

function Musicplayer({song  ,cover, auto , addSongToPlaylist }) {
    const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);
// save to playlist
const [selectedPlaylistId,] = useState(null);
//volume
const [volume, setVolume] = useState(1); 

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
    if (!isLove && selectedPlaylistId !== null) {  
      const newSong = { title: "Song Title", artist: "Artist Name", url: song }; // Replace with actual song details  
      addSongToPlaylist(selectedPlaylistId, newSong);  
    }
  };
  const skipForward = () => {  
    if (audioPlayer.current) {  
      audioPlayer.current.currentTime = Math.min(audioPlayer.current.currentTime + 10, duration);  
      setCurrenttime(audioPlayer.current.currentTime);  
    }  
  };  

  const skipBackward = () => {  
    if (audioPlayer.current) {  
      audioPlayer.current.currentTime = Math.max(audioPlayer.current.currentTime - 10, 0);  
      setCurrenttime(audioPlayer.current.currentTime);  
    }  
  };  
// Function to handle the download  
const handleDownload = () => {  
  const link = document.createElement('a');  
  link.href = song; // The URL of the audio file  
  link.setAttribute('download', song.name); // Specify the filename  
  document.body.appendChild(link);  
  link.click();  
  document.body.removeChild(link);  
}; 
//volume
const handleVolumeChange = (e) => {  
  const newVolume = e.target.value; // This will be between 0 and 1  
  setVolume(newVolume);  
  if (audioPlayer.current) {  
    audioPlayer.current.volume = newVolume; // Update audio player's volume  
  }  
};  
const shareSong = () => {  
  const shareData = {  
    title: 'Check out this song!',  
    text: 'I found this amazing song you should listen to!',  
    url: song, // The URL of the song  
  };  

  if (navigator.share) {  
    navigator.share(shareData)  
      .then(() => console.log('Share successful'))  
      .catch((error) => console.error('Error sharing:', error));  
  } else {  
    // Fallback for browsers that do not support the Web Share API  
    navigator.clipboard.writeText(song).then(() => {  
      alert('Song URL copied to clipboard!');  
    }).catch((error) => {  
      console.error('Could not copy text: ', error);  
    });  
  }  
};  
    return(
        <div className="musicPlayer">
        <div className="songImage">
          <img src={cover} alt="exe" />
        </div>
        <div className="songAttributes">
          <audio src={song} name={song.songName} preload="metadata" ref={audioPlayer} />
          
          <div className="top">
            <div className="left">
              <div className="loved" onClick={changeSongLove}>
                {isLove ? (<i> <FaRegHeart /></i>) : (<i><FaHeart /></i>)}
              </div>
              <i className="download" onClick={handleDownload}>
                <BsDownload />
              </i>
            </div>
            
            <div className="middle">
              <div className="back" onClick={skipBackward}>
                <i>
                  <FaStepBackward />
                </i>
                <i>
                  <FaBackward />
                </i>
              </div>
              <div className="playPause" onClick={changePlayPause}>
                {isPlaying ? (
                  <i>
                    <FaPause />
                  </i>
                ) : (
                  <i>
                    <FaPlay />
                  </i>
                )}
              </div>
              <div className="forward" onClick={skipForward}>
                <i>
                  <FaForward />
                </i>
                <i>
                  <FaStepForward />
                </i>
              </div>
            </div>
            <div className="bottom1">
        <i classname="v1"> 
          <BsFillVolumeUpFill />
        </i>
        <input className="v2" type="range"  min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />  
      </div>
            <div className="right">
              <i>
                <FaShareAlt onClick={shareSong}/>
              </i>
            </div>
            
          </div>
  
          <div className="bottom">
            <div className="currentTime">{calculateTime(currentTime)}</div>
            <input
              type="range"
              className="progressBar"
              ref={progressBar}
              defaultValue="0"
              onChange={changeProgress}
              autoPlay={auto}
            />
            <div className="duration">
              {duration && !isNaN(duration) && calculateTime(duration)
                ? duration && !isNaN(duration) && calculateTime(duration)
                : "00:00"}
            </div>
          </div>
        </div>
        </div>
    )
}
export default Musicplayer;