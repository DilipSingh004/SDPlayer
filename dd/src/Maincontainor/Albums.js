
import React, { useState } from "react";
import albumData from "../Maincontainor/Albumdata";
import "../styles/album.css";
import { FaPlay } from "react-icons/fa";


function Album() {
  const [albums] = useState(albumData);
  const [isOpen, setIsOpen] = useState({});

  const handleAlbumClick = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="album-container">
      {albums.map((album) => (
        <div key={album.id}>
          <div className="album-header" onClick={() => handleAlbumClick(album.id)}>
            <img src={album.cover} alt="Album Art" />
            <div className="album-info">
              <h2>{album.title}</h2>
              <p>{album.artist}</p>
            </div>
          </div>
          {isOpen[album.id] && (
            <div className="album-tracks">
              <h3>Tracks</h3>
              <ul>
                {album.tracks.map((track) => (
                  <li key={track.id}>
                    <span>{track.title}</span>
                    <span>{track.duration}</span>
                    <button>
                      <FaPlay />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      
    </div>

  );
}

export default Album;

