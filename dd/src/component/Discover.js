
import React, { useState, useEffect } from 'react';  
import '../styles/main.css'

// Placeholder components (you'll need to implement these)  
const SectionHeader = ({ title }) => <h2>{title}</h2>;  
const TrackList = ({ tracks }) => (  
  <ul>  
    {tracks.map((track) => (  
      <li key={track.id}>{track.title} - {track.artist}</li> // Replace with TrackItem component for better styling  
    ))}  
  </ul>  
);  
const PlaylistList = ({ playlists }) => (  
  <ul>  
    {playlists.map((playlist) => (  
      <li key={playlist.id}>{playlist.name}</li> // Replace with PlaylistItem component  
    ))}  
  </ul>  
);  

const DiscoverPage = () => {  
  const [discoverData, setDiscoverData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        // Replace with your actual data fetching logic  
        const data = await fetchDiscoverData();  
        setDiscoverData(data);  
      } catch (err) {  
        setError(err);  
        console.error("Error fetching discover data:", err);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchData();  
  }, []); // Empty dependency array ensures this runs only once on mount  

  if (loading) {  
    return <p>Loading...</p>;  
  }  

  if (error) {  
    return <p>Error: {error.message}</p>;  
  }  

  if (!discoverData) {  
    return <p>No data to display.</p>;  
  }  

  return (  
    <div className='discover'>  
      <SectionHeader title="Trending Tracks" />  
      <TrackList tracks={discoverData.trendingTracks} />  

      <SectionHeader title="New Releases" />  
      <TrackList tracks={discoverData.newReleases} />  

      <SectionHeader title="Curated Playlists" />  
      <PlaylistList playlists={discoverData.curatedPlaylists} />  

       <SectionHeader title="Recommended For You" />  
      <TrackList tracks={discoverData.recommendedForYou} />  
    </div>  
  );  
};  

// Mock fetchDiscoverData function (replace with your actual data fetching)  
async function fetchDiscoverData() {  
  // Simulate an API call with a delay  
  await new Promise(resolve => setTimeout(resolve, 500));  

  return {  
    trendingTracks: [  
      { id: 1, title: "Blinding Lights", artist: "The Weeknd" },  
      { id: 2, title: "Watermelon Sugar", artist: "Harry Styles" },  
    ],  
    newReleases: [  
      { id: 3, title: "Positions", artist: "Ariana Grande" },  
      { id: 4, title: "Dynamite", artist: "BTS" },  
    ],  
    curatedPlaylists: [  
      { id: 101, name: "Pop Hits 2023" },  
      { id: 102, name: "Indie Rock Anthems" },  
    ],  
     recommendedForYou: [  
          { id: 5, title: "Circles", artist: "Post Malone" },  
          { id: 6, title: "Don't Start Now", artist: "Dua Lipa" },  
        ]  
  };  
}  

export default DiscoverPage;  

