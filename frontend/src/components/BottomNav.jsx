import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { key: "home", label: "Home", path: "/home", icon: "🏠" },
  { key: "schedule", label: "Schedule", path: "/schedule", icon: "➕" },
  { key: "track", label: "Track", path: "/track", icon: "🚚" },
  { key: "alerts", label: "Alerts", path: "/alerts", icon: "🔔" },
  { key: "profile", label: "Profile", path: "/profile", icon: "👤" },
];

export default function BottomNav() {
  const loc = useLocation();
  const nav = useNavigate();

  return (
    <div className="bottomnav">
      <div className="tabs-row">
        {items.map((it) => {
          const active = loc.pathname.startsWith(it.path);
          return (
            <button key={it.key} className={`tabbtn ${active ? "active" : ""}`} onClick={() => nav(it.path)}>
              <div style={{ fontSize: 18, lineHeight: 1 }}>{it.icon}</div>
              <div>{it.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
