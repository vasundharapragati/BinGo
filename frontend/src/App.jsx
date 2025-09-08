import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Track from "./pages/Track";
import Alert from "./pages/Alert";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  const isLoggedIn = true; // replace with auth logic

  if (!isLoggedIn) {
    return <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar userName="Vasundhara Pragati" />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/track" element={<Track />} />
          <Route path="/alerts" element={<Alert />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <NavBar />
    </div>
  );
}

export default App;
