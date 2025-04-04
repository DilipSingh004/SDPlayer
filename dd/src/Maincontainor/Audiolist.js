import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart,FaPlus } from "react-icons/fa";
import "../styles/leftmenu.css";
import MusicPlayer from "../Maincontainor/Musicplayer";
import { Songs } from "../Maincontainor/Songs";

function Audiolist(){
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(songs[0].song);
    const [img, setImage] = useState(songs[0].cover);
    const [auto, setAuto] = useState(false);
    const [artistName, setArtistName] = useState('');  
    const [audioFile, setAudioFile] = useState(null);  
    const [coverImage, setCoverImage] = useState(null);
    const [showUploadForm, setShowUploadForm] = useState(false); 

    useEffect(() => {
      const allSongs = document.querySelectorAll(".songs");
      function changeActive() {
        allSongs.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }
  
      allSongs.forEach((n) => n.addEventListener("click", changeActive));
    }, []);
  
    const changeFavourite = (id) => {
      Songs.forEach((song) => {
        if (song.id === id) {
          song.favourite = !song.favourite;
        }
      });
  
      setSongs([...songs]);
    };
  
    const setMainSong = (songSrc, cover) => {
      setSong(songSrc);
      setImage(cover);
      setAuto(true);
    };
 
  const handleAudioUpload = (event) => {  
    const file = event.target.files[0];  
    if (file && file.type.startsWith('audio/')) {  
        setAudioFile(file);  
    }  
};  

const handleCoverUpload = (event) => {  
    const file = event.target.files[0];  
    if (file && file.type.startsWith('image/')) {  
        setCoverImage(URL.createObjectURL(file));  
    }  
};  

const handleSubmit = () => {  
    if (audioFile && artistName && coverImage) {  
        const url = URL.createObjectURL(audioFile);  
        const newSong = {  
            id: Date.now(),  
            song: url,  
            songName: audioFile.name.split('.')[0],  
            artist: artistName,  
            cover: coverImage,  
            favourite: false,  
        };  

        setSongs((prevSongs) => [...prevSongs, newSong]);  
        // Reset fields  
        setArtistName('');  
        setAudioFile(null);  
        setCoverImage(null); 
        setShowUploadForm(false); 
    } else {  
        alert("Please fill in all fields!");  
    }  
}; 
const toggleUploadForm = () => {  
  setShowUploadForm(!showUploadForm);  
}; 

    return(
        <div className="AudioList">
        <h2 className="title">
          The list 
          <p className="ad2">Add Music
         <FaPlus className="ad2" onClick={toggleUploadForm} style={{ cursor: 'pointer' }}/></p>
        </h2>
        {showUploadForm && ( 
        <p className="ad">
          <p className="ad6">
          <p className="ad5">Audio :
                <input  
                        className="ad1"  
                        type="file"  
                        accept="audio/*" 
                        onChange={handleAudioUpload}  
                        style={{ marginBottom: '20px', background: 'transparent', color: 'grey' }} // Optional styling  
                    /> </p> 
                    <p className="ad5">Image :
                    <input  
                        className="ad1"  
                        type="file"  
                        accept="image/*" 
                        onChange={handleCoverUpload}  
                        style={{ marginBottom: '20px', background: 'transparent', color: 'grey' }} // Optional styling  
                    />  </p>
                    <input  
                    className="ad3"
                        type="text"  
                        placeholder="Artist Name"  
                        value={artistName}  
                        onChange={(e) => setArtistName(e.target.value)}  
                        // Optional styling  
                    />  
                    <button className="ad4" onClick={handleSubmit}>Submit</button> 
                    </p> 
            </p>  )}  
       
        <div className="songsContainer">
          {songs &&
            songs.map((song, index) => (
              <div
                className="songs"
                key={song?.id}
                onClick={() => setMainSong(song?.song, song?.cover)}
              >
                <div className="count">
                  <p>{`#${index + 1}`}</p>
                </div>
                <div className="song">
                  <div className="imgBox">
                    <img src={song?.cover} alt="" />
                  </div>
                  <div className="section">
                    <p className="songName">
                      {song?.songName}{" "}
                      <span className="songSpan">{song?.artist}</span>
                    </p>
  
                    <div className="hits">
                      <p className="hit">
                        <i>
                          <FaHeadphones />
                        </i>
                        95,490,102
                      </p>
  
                      <p className="duration">
                        <i>
                          <FaRegClock />
                        </i>
                        03:04
                      </p>
                      <div
                        className="favourite"
                        onClick={() => changeFavourite(song?.id)}
                      >
                        {song?.favourite ? (
                          <i>
                            <FaHeart />
                          </i>
                        ) : (
                          <i>
                            <FaRegHeart />
                          </i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
  
        <MusicPlayer song={song} cover={img} autoplay={auto} />
      </div>

    )
}
export default Audiolist;