import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RecycleGlyph() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M7 21H2l2.5-4.5M7 21l-2.5-4.5M7 21l2-3.5M17 3h5l-2.5 4.5M17 3l2.5 4.5M17 3l-2 3.5" />
      <path d="M13 10l-2-3.5L5 14l2 3.5h10l2-3.5-6-3z" />
    </svg>
  );
}

export default function Auth() {
  const [mode, setMode] = useState("signin"); // signin | signup
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const { signIn, signUp } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      if (mode === "signin") {
        await signIn({ email: form.email.trim(), password: form.password });
      } else {
        if (!form.name.trim()) throw new Error("Please enter your name.");
        if (!/^\S+@\S+\.\S+$/.test(form.email)) throw new Error("Please enter a valid email.");
        if (!/^\d{7,15}$/.test(form.phone.replace(/\D/g, ""))) throw new Error("Enter a valid phone number.");
        if (form.password.length < 4) throw new Error("Password must be at least 4 characters.");
        await signUp({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          password: form.password,
        });
      }
      nav("/home", { replace: true });
    } catch (e2) {
      setErr(e2.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrap">
      <div style={{ width: "100%", maxWidth: 520 }}>
        <div className="brand">
          <div className="brand-badge"><RecycleGlyph /></div>
          <div className="brand-title">BinGo</div>
          <div className="brand-sub">Smart Waste Management</div>
        </div>

        <div className="auth-card">
          <div className="label" style={{ marginBottom: 10 }}>Join BinGo</div>

          <div className="tabs" role="tablist" aria-label="Auth mode">
            <div
              className={`tab ${mode === "signin" ? "active" : ""}`}
              role="tab"
              tabIndex={0}
              onClick={() => setMode("signin")}
            >
              Sign In
            </div>
            <div
              className={`tab ${mode === "signup" ? "active" : ""}`}
              role="tab"
              tabIndex={0}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </div>
          </div>

          <form onSubmit={onSubmit} className="form" style={{ display: "grid", gap: 12 }}>
            {mode === "signup" && (
              <>
                <div>
                  <div className="label">Full Name</div>
                  <input className="input" placeholder="e.g. Vasundhara Pragati"
                         value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                </div>
                <div>
                  <div className="label">Phone Number</div>
                  <input className="input" placeholder="e.g. 9315962168"
                         value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})}/>
                </div>
              </>
            )}

            <div>
              <div className="label">Email</div>
              <input className="input" placeholder="Enter your email"
                     value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
            </div>

            <div>
              <div className="label">Password</div>
              <input type="password" className="input" placeholder="Enter your password"
                     value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}/>
            </div>

            {err && <div style={{ color:"#b42318", fontWeight:700 }}>{err}</div>}

            <button className="btn" disabled={loading}>
              {loading ? (mode==="signin" ? "Signing in..." : "Creating account...") : (mode==="signin" ? "Sign In" : "Create Account")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
