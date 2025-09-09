import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { storage } from "../utils/storage";

export default function Alerts() {
  const alerts = storage.getAlerts();

  return (
    <div className="app">
      <TopBar />
      <div className="content container" style={{ display:"grid", gap:14 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ fontSize:22 }}>🔔</div>
          <h2 style={{ margin:0 }}>Notifications</h2>
        </div>

        {alerts.length === 0 ? (
          <div className="card">No notifications yet.</div>
        ) : (
          <div className="list">
            {alerts.map((a)=>(
              <div className="alert" key={a.id}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div className="title">{a.title}</div>
                  <span style={{ fontSize:12, padding:"4px 8px", borderRadius:999, background:"#e8f6ef", color:"#0a6a4d", fontWeight:700 }}>
                    {a.tag}
                  </span>
                </div>
                <div style={{ margin:"6px 0 2px" }}>{a.body}</div>
                <div className="meta">{a.at}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
