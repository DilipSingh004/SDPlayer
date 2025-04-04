
import React, { useState } from 'react';  
import Podcast1 from './Podcast1'; // Adjust path as needed  
import '../styles/main.css';  

const Podcasts = () => {  
  const [episodes] = useState([  
    { id: 1, title: 'Episode 1: The Beginning', category: 'Journey to the west' },  
    { id: 2, title: 'Episode 2:  Adventures', category: 'Journey to the west' },  
    { id: 3, title: 'Episode 3: Reunion', category: 'Journey to the west' }, 
    { id: 4, title: 'Episode 4: The prophecy', category: 'Journey to the west' }, 
    { id: 5, title: 'Episode 5: war', category: 'Journey to the west' }, 
    { id: 6, title: 'Episode 1: Born of Warrior ', category: 'Wokong' },  
    { id: 7, title: 'Episode 2: Adventures ', category: 'Wokong' },   
    { id: 8, title: 'Episode 3: Road to immortality', category: 'Wokong' }, 
    { id: 9, title: 'Episode 4: Hunger', category: 'Wokong' }, 
    { id: 10,title:'Episode 5: King of monkey', category: 'Wokong' }, 
    { id: 11,title:'Episode 1: Mysterioues planet ', category: 'Space' }, 
    { id: 12,title:'Episode 2: Jupitor reddot', category: 'Space' }, 
    { id: 13,title:'Episode 3: Milky Way', category: 'Space' }, 
    { id: 14,title:'Episode 4: Andormeda Galaxy', category: 'Space' }, 
    { id: 15,title:'Episode 5: Black hole ', category: 'Space' }, 
  ]);  

  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);  
  const [isCategoryOpen, setIsCategoryOpen] = useState({}); // Track open categories  

  const handleEpisodeClick = (episodeId) => {  
    setCurrentEpisodeId(episodeId);  
    console.log('Episode clicked:', episodeId);  
  };  

  const toggleCategory = (category) => {  
    setIsCategoryOpen(prevState => ({  
      ...prevState,  
      [category]: !prevState[category] // Toggle the category's open state  
    }));  
  };  

  const getUniqueCategories = () => {  
    return [...new Set(episodes.map(episode => episode.category))];  
  };  

  const uniqueCategories = getUniqueCategories();  

  return (  
    <div className="podcast-player">  
      <h1>Podcast</h1>  
<div className='podcast-player1'>
      {uniqueCategories.map(category => (  
        <div key={category}>  
          <h2 onClick={() => toggleCategory(category)} style={{ cursor: 'pointer' }}>  
            {category} {isCategoryOpen[category] ? '▲' : '▼'}  
          </h2>  

          {isCategoryOpen[category] && (  
            <Podcast1  
              episodes={episodes.filter(episode => episode.category === category)}  
              onEpisodeClick={handleEpisodeClick}  
              currentEpisodeId={currentEpisodeId}  
            />  
          )}  
        </div>  
      ))} 
      </div> 
    </div>  
  );  
};  

export default Podcasts;  