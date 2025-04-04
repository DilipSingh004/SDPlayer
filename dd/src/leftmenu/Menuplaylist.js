import React, { useState, useEffect } from 'react'
import "../styles/leftmenu.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList as InitialPlayList } from "./Playlist";

function Menuplaylist() {
    // State to manage playlists  
    const [playlists, setPlaylists] = useState(() => {  
      const savedPlaylists = localStorage.getItem("playlists");  
      return savedPlaylists ? JSON.parse(savedPlaylists) : InitialPlayList;  
    });  
  // Update local storage whenever playlists change  
  useEffect(() => {  
    localStorage.setItem("playlists", JSON.stringify(playlists));  
  }, [playlists]);  

  // Function to remove a playlist  
  const removePlaylist = (id) => {  
    const updatedPlaylists = playlists.filter((playlist) => playlist.id !== id);  
    setPlaylists(updatedPlaylists);  
  };  
// Function to add a new playlist  
const addPlaylist = () => {  
  const playlistName = prompt("Enter the name of the new playlist:");  
  if (playlistName) {  
    const newPlaylist = {  
      id: Date.now(), // Use timestamp as a simple unique ID  
      name: playlistName,  
    };  
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);  
  }  
}; 

  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>Playlists</p>
        <i onClick={addPlaylist}>
          <FaPlus />
        </i>
      </div>

      <div className="playListScroll">
        {playlists &&
          playlists.map((list) => (
            <div className="playLists" key={list.id}>
              <i className="list" >
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash"  onClick={() => removePlaylist(list.id)}>
                <BsTrash  />
              </i>
            </div>
          ))}
      </div>
    </div>
  )
}

export  {Menuplaylist};
