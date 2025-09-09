import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, signOut } = useAuth();

  return (
    <div className="app">
      <TopBar />
      <div className="content container" style={{ display:"grid", gap:14 }}>
        <div className="profile-card">
          <div className="avatar">👤</div>
          <div className="profile-info">
            <div style={{ fontWeight:800, fontSize:18 }}>{user?.name}</div>
            <div style={{ color:"#64748b" }}>{user?.email}</div>
            <div style={{ color:"#64748b" }}>📍 {user?.location || "Noida"}</div>
          </div>
        </div>

        <div className="card settings">
          <div className="row">
            <div>Notifications</div><div>›</div>
          </div>
          <div className="row">
            <div>Payment Methods</div><div>›</div>
          </div>
          <div className="row">
            <div>Help & Support</div><div>›</div>
          </div>
          <div className="row">
            <div>Privacy Policy</div><div>›</div>
          </div>
        </div>

        <div className="card" style={{ display:"grid", gap:8 }}>
          <div style={{ fontWeight:800 }}>Welcome Back!</div>
          <div>📧 {user?.email}</div>
          <div>👤 {user?.name}</div>
          <div>📞 {user?.phone}</div>
          <div>📍 {user?.location || "Noida"}</div>

          <button className="btn" onClick={signOut} style={{ marginTop:8 }}>Sign Out</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
