import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { storage } from "../utils/storage";

export default function Home() {
  const nav = useNavigate();
  const pickups = storage.getPickups();

  return (
    <div className="app">
      <TopBar />
      <div className="content container" style={{ display:"grid", gap:14 }}>
        {/* Stats */}
        <div className="stat-grid">
          <div className="card">
            <div className="stat">
              <div className="icon">💸</div>
              <div>
                <div className="sub">Earnings</div>
                <div className="big">₹0</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="stat">
              <div className="icon">♻️</div>
              <div>
                <div className="sub">Recycled</div>
                <div className="big">0 kg</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="card" style={{ display:"grid", gap:12 }}>
          <div style={{ fontWeight:800, fontSize:16 }}>Quick Actions</div>
          <div className="qactions">
            <button className="qitem primary" onClick={()=>nav("/schedule")}>
              <div className="left"><span>➕</span> <b>Schedule Pickup</b></div>
              <span>›</span>
            </button>
            <button className="qitem" onClick={()=>nav("/track")}>
              <div className="left"><span>🚚</span> <b>Track Pickups</b></div>
              <span>›</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div style={{ fontWeight:800, fontSize:16, marginBottom:10 }}>Recent Activity</div>
          {pickups.length === 0 ? (
            <div className="recent-empty">
              <div style={{ fontSize:42 }}>🚛</div>
              <div>No recent pickups</div>
              <button className="btn btn-secondary" onClick={()=>nav("/schedule")}>Schedule Your First Pickup</button>
            </div>
          ) : (
            <div className="list">
              {pickups.slice(0,3).map((p)=>(
                <div className="qitem" key={p.id}>
                  <div className="left">
                    <span>🗓️</span>
                    <div>
                      <div><b>{p.type}</b> — {p.weight} kg</div>
                      <div style={{ fontSize:12, color:"#64748b" }}>
                        {p.date} at {p.time} • {p.address}
                      </div>
                    </div>
                  </div>
                  <span>›</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Environmental Impact */}
        <div className="card">
          <div style={{ fontWeight:800, fontSize:16, marginBottom:10 }}>Environmental Impact</div>
          <div style={{ display:"grid", gap:10 }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span>CO₂ Saved</span><b style={{ color: "green" }}>0 kg</b>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span>Trees Saved</span><b style={{ color: "green" }}>0</b>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span>Water Saved</span><b style={{ color: "green" }}>0 L</b>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
