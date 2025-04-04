import React from 'react';  

const Podcast1 = ({ episodes, onEpisodeClick, currentEpisodeId }) => {  
  return (  
    <div className="episode-list">  
      <h3>Episodes</h3>  
      <ul>  
        {episodes.map((episode) => (  
          <li  
            key={episode.id}  
            onClick={() => onEpisodeClick(episode.id)}  
            style={{  
              cursor: 'pointer',  
              fontWeight: episode.id === currentEpisodeId ? 'bold' : 'normal',  
            }}  
          >  
            {episode.title}  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default Podcast1;  