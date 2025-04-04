import React from 'react';  

const Userpage = ({ email }) => {  
  const handleLogout = () => {  
    // Perform logout logic here. For example, clearing session storage/local storage, etc.  
    localStorage.removeItem("user"); // Adjust based on your authentication method  

    // Redirect to the login page or home page  
    window.location.href = '/login'; // Adjust the path based on your routing  
  }; 
  return (  
    <div className="userPage">  
      <h1>Welcome to Your User Page</h1>  
      <p>Your logged-in email is: {email}</p>  
      {/* Additional user information and functionality can be added here */}  
      <button onClick={handleLogout}>Logout</button>
    </div>  
  );  
};  

export default Userpage;  
