import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { storage } from "../utils/storage";

const WASTE_TYPES = ["Metal", "Glass", "Paper", "Plastic", "E-Waste", "Organic"];

export default function Schedule() {
  const [form, setForm] = useState({
    type: "",
    weight: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setErr("");
    if (!form.type) return setErr("Please select a waste type.");
    if (!form.weight || Number(form.weight) <= 0) return setErr("Enter a valid weight (kg).");
    if (!form.address.trim()) return setErr("Please enter address.");
    if (!form.date) return setErr("Pick a date.");
    if (!form.time) return setErr("Pick a time.");

    const pickup = { id: crypto.randomUUID(), ...form, status: "Scheduled", createdAt: new Date().toISOString() };
    storage.addPickup(pickup);

    storage.addAlert({
      id: crypto.randomUUID(),
      title: "Collector Assigned",
      body: `A verified collector has been assigned to your ${pickup.type.toLowerCase()} waste pickup.`,
      tag: "status update",
      at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });

    nav("/alerts");
  };

  return (
    <div className="app">
      <TopBar />
      <div className="content container">
        <div style={{ display:"flex", alignItems:"center", gap:10, margin:"8px 0 14px" }}>
          <div style={{ fontSize:22 }}>🧱</div>
          <h2 style={{ margin:0 }}>Schedule Pickup</h2>
        </div>

        <form className="card" onSubmit={submit} style={{ display:"grid", gap:12 }}>
          <div style={{ display:"grid", gap:12, gridTemplateColumns:"1fr 1fr" }}>
            <div>
              <div className="label">Waste Type</div>
              <select className="select" value={form.type} onChange={(e)=>setForm({...form, type:e.target.value})}>
                <option value="">Select waste type</option>
                {WASTE_TYPES.map(t=> <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <div className="label">Weight (kg)</div>
              <input className="input" placeholder="Enter weight in kg" value={form.weight}
                     onChange={(e)=>setForm({...form, weight:e.target.value.replace(/[^\d.]/g,"")})}/>
            </div>
          </div>

          <div>
            <div className="label">Pickup Address</div>
            <input className="input" placeholder="Enter complete pickup address" value={form.address}
                   onChange={(e)=>setForm({...form, address:e.target.value})}/>
          </div>

          <div style={{ display:"grid", gap:12, gridTemplateColumns:"1fr 1fr" }}>
            <div>
              <div className="label">Pickup Date</div>
              <input className="input" type="date" value={form.date}
                     onChange={(e)=>setForm({...form, date:e.target.value})}/>
            </div>
            <div>
              <div className="label">Pickup Time</div>
              <input className="input" type="time" value={form.time}
                     onChange={(e)=>setForm({...form, time:e.target.value})}/>
            </div>
          </div>

          <div>
            <div className="label">Additional Notes (Optional)</div>
            <textarea className="textarea" placeholder="Any special instructions for the collector"
                      value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})}/>
          </div>

          {err && <div style={{ color:"#b42318", fontWeight:700 }}>{err}</div>}

          <button className="btn">Schedule Pickup</button>
        </form>
      </div>
      <BottomNav />
    </div>
  );
}
