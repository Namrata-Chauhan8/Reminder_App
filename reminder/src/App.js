import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./views/accounts/register/Signup";
import Login from "./views/accounts/login/Login";
import Home from "./views/home/Home";
import Reminder from "./views/reminder/Reminder";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const userdata = localStorage.getItem("userData");
    if (userdata) {
      setIsLoggedIn(true);
      console.log("User is logged in");
    } else {
      setIsLoggedIn(false);
      console.log("User is not logged in");
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/reminder"
            element={isLoggedIn ? <Reminder /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
