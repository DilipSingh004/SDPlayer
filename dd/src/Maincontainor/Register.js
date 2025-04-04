
import React, { useState } from "react";  
import { Mail, KeySquare } from "lucide-react";  
import '../styles/register.css';  

const URL = "http://localhost:5000/api/auth/register";  

const Register = ({ closeRegister }) => {  
  const [error, setError] = useState('');  
  const [user, setUser] = useState({  
    username: "",  
    email: "",  
    password: "",  
  });  
  
  const handleInput = (e) => {  
    const { name, value } = e.target;  
    setUser(prevUser => ({  
      ...prevUser,  
      [name]: value,  
    }));  
  };  

  const handleRegisterSubmit = async (e) => {  
    e.preventDefault();  
    
    // You can remove the password confirmation logic since it's no longer needed  
    // Validate inputs if necessary (e.g., empty fields, password strength)  
    
    try {  
      const response = await fetch(URL, {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
        },  
        body: JSON.stringify(user),  
      });  
      
      if (response.ok) {  
        const res_data = await response.json();  
        console.log("Response from server:", res_data);  
        
        // Store token in local storage  
        localStorage.setItem('token', res_data.token);  
        
        // Reset user state  
        setUser({  
          username: "",  
          email: "",  
          password: "",  
        });  
        
        alert("Registration successful!");  
        closeRegister(); // Close register page after successful registration  
      } else {  
        // Handle server errors  
        const errorData = await response.json();  
        setError(errorData.message || "Registration failed. Please try again.");  
      }  
    } catch (error) {  
      console.error("Registration error:", error);  
      setError("An error occurred. Please try again later.");  
    }  
  };  

  return (  
    <div className="registerPopup">  
      <h2 className="headt">Create an Account</h2>  
      <form onSubmit={handleRegisterSubmit}>  
        <div className="bd">  
          <Mail className="ico" />  
          <input  
            type="text"  
            placeholder="Enter your Username"  
            name="username"  
            value={user.username}  
            onChange={handleInput}  
            required  
          />  
        </div>  
        <div className="bd">  
          <Mail className="ico" />  
          <input  
            type="email"  
            placeholder="Enter your email"  
            name="email"  
            value={user.email}  
            onChange={handleInput}  
            required  
          />  
        </div>  
        <div className="bd">  
          <KeySquare className="ico" />  
          <input  
            type="password"  
            placeholder="Enter your password"  
            name="password"  
            value={user.password}  
            onChange={handleInput}  
            required  
          />  
        </div>  
        {error && <p className="errorMessage">{error}</p>}  
        <button type="submit">Register</button>  
        <button type="button" onClick={closeRegister}>Cancel</button>  
      </form>  
    </div>  
  );  
};  

export default Register;  