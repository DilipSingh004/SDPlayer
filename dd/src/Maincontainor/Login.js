import React, { useState } from "react";
import "../styles/login.css";
import { TiCancelOutline } from "react-icons/ti";
import { Mail } from "lucide-react";
import { KeySquare } from "lucide-react";
import Register from "./Register";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/login";

const Login = ({ setIsLoggedIn }) => {
  // Receive setIsLoggedIn as a prop
  // const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  // const [email, setEmail] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState({
    // username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login Form", response);
      if (response.ok) {
        alert("Login Successful");
        setUser({
          email: "",
          password: "",
        });
        const res_data = await response.json();
        console.log("Response from server:", res_data);

        // Store token in local storage
        localStorage.setItem("token", res_data.token);
        // Update the logged-in state
        setIsLoggedIn(true);
      } else {
        alert("Invalid Credential");
        console.log("Invalid Credential");
        setUser({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setError("");
  };

  // Toggle between Login and Register
  const toggleRegister = () => setShowRegister(!showRegister);

  return (
    <div className="loginPopup">
      <div className="loginContent">
        {showRegister ? (
          <Register closeRegister={toggleRegister} />
        ) : (
          <div className="log-card">
            <div className="cancel">
              <Link to="/" className="cancel">
                <h1 className="head">Login To Your Realm</h1>
              </Link>
              <TiCancelOutline className="ico1" size={30} color="#00ffff" />
            </div>
            <div className="details">
              <form className="fo" onSubmit={handleSubmit}>
                <p className="p1">
                  <Mail className="ico" />
                  <input
                    className="i1"
                    type="email"
                    name="email"
                    placeholder="Enter Email Here"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </p>

                <p className="p2">
                  <KeySquare className="ico" />
                  <input
                    className="i1"
                    type="password"
                    name="password"
                    placeholder="Enter Password Here"
                    value={user.password}
                    onChange={handleInput}
                    required
                  />
                </p>

                {error && <p className="errorMessage">{error}</p>}
                <br />

                <button className="submit">Submit</button>
                <button
                  type="button"
                  className="register-button"
                  onClick={toggleRegister}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
