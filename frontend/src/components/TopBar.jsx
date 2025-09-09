import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function TopBar() {
  const { user } = useAuth();
  const nav = useNavigate();

  return (
    <div className="topbar">
      <div className="topbar-row">
        <div>
          <div className="title">BinGo</div>
          <div className="hello">Hello, {user?.name?.split(" ")[0]}!</div>
        </div>
        <button
          className="profile-button"
          aria-label="Profile"
          onClick={() => nav("/profile")}
          title="Open Profile"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M20 21a8 8 0 0 0-16 0"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
