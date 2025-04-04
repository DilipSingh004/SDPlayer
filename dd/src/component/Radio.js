
import React, { useState } from 'react';  
import RadioChecker from './RadioChecker';  
import '../styles/main.css';  

const Radio = () => {  
    const [channels, setChannels] = useState([  
        { id: 1, name: 'My Station 1', url: 'http://example.com/stream1.mp3', status: 'idle', playlist: ['Song A', 'Song B', 'Song C'] },  
        { id: 2, name: 'Cool Radio', url: 'http://example.com/stream2.mp3', status: 'idle', playlist: ['Track 1', 'Track 2'] },  
        { id: 3, name: 'Jazz FM', url: 'http://example.com/stream3.mp3', status: 'idle', playlist: ['Jazz Standard 1', 'Smooth Jazz'] },  
    ]);  

    const [selectedChannelId, setSelectedChannelId] = useState(null);  

    const handleStatusChange = (id, status) => {  
        setChannels(prevChannels =>  
            prevChannels.map(channel =>  
                channel.id === id ? { ...channel, status: status } : channel  
            )  
        );  
    };  

    const handleChannelClick = (id) => {  
        setSelectedChannelId(id);  
    };  

    const selectedChannel = channels.find(channel => channel.id === selectedChannelId);  

    return (  
        <div className="radio-channel-list">  
            <h2>Radio Channel List</h2>  
            <ul>  
                {channels.map(channel => (  
                    <li  
                        key={channel.id}  
                        className="radio-channel-item"  
                        onClick={() => handleChannelClick(channel.id)} // Added onClick handler  
                        style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable  
                    >  
                        <div className="channel-info">  
                            {channel.name} - Status: {channel.status}  
                        </div>  
                        <RadioChecker  
                            streamUrl={channel.url}  
                            onStatusChange={(status) => handleStatusChange(channel.id, status)}  
                        />  
                    </li>  
                ))}  
            </ul>  

            {selectedChannel && (  
                <div className="playlist">  
                    <h3>Playlist for {selectedChannel.name}</h3>  
                    <ul>  
                        {selectedChannel.playlist.map((song, index) => (  
                            <li key={index}>{song}</li>  
                        ))}  
                    </ul>  
                </div>  
            )}  
        </div>  
    );  
};  

export default Radio;  