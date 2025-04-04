import React, { useState, useEffect } from 'react';  

const RadioChecker = ({ streamUrl, onStatusChange }) => {  
    const [status, setStatus] = useState('idle'); // idle, loading, active, inactive, error  

    useEffect(() => {  
        const checkStream = async () => {  
            setStatus('loading');  
            try {  
                const response = await fetch(streamUrl, { method: 'HEAD' }); // HEAD request  

                if (response.ok) {  
                    setStatus('active');  
                    onStatusChange('active'); // Notify parent component  
                } else {  
                    setStatus('inactive');  
                    onStatusChange('inactive');  
                }  
            } catch (error) {  
                console.error('Error checking stream:', error);  
                setStatus('error');  
                onStatusChange('error');  
            }  
        };  

        checkStream(); // Call immediately  
        const intervalId = setInterval(checkStream, 60000); // Check every 60 seconds  

        return () => clearInterval(intervalId); // Cleanup on unmount  
    }, [streamUrl, onStatusChange]);  

    return (  
        <div>  
            Stream Status: {status}  
        </div>  
    );  
};  

export default RadioChecker;  