import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { storage } from "../utils/storage";

function Map({ q = "Noida, India" }) {
  // Simple, keyless Google Maps Embed. You can replace with Maps JS API if desired.
  const url = `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  return (
    <div style={{ borderRadius:14, overflow:"hidden", border:"1px solid #e6e8eb", boxShadow:"var(--shadow)" }}>
      <iframe
        title="map"
        src={url}
        width="100%"
        height="360"
        style={{ border:0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function Track() {
  const pickups = storage.getPickups();
  const latest = pickups[0];

  return (
    <div className="app">
      <TopBar />
      <div className="content container" style={{ display:"grid", gap:14 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ fontSize:22 }}>🚚</div>
          <h2 style={{ margin:0 }}>Track Pickup</h2>
        </div>

        <Map q={latest ? latest.address : "Noida, India"} />

        <div className="card">
          {latest ? (
            <>
              <div style={{ fontWeight:800, marginBottom:6 }}>{latest.type} — {latest.weight} kg</div>
              <div style={{ color:"#64748b" }}>
                {latest.date} at {latest.time} • {latest.address}
              </div>
              <div style={{ marginTop:10, display:"flex", alignItems:"center", gap:8 }}>
                <span>📍</span>
                <span>Collector approaching — ~5 minutes away</span>
              </div>
            </>
          ) : (
            <div>No scheduled pickups yet. Schedule one to start tracking.</div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
