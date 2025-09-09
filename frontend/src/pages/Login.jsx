import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../utils/storage";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = storage.getUser();
    if (user && user.email === email && user.password === password) {
      storage.setAuth(true);
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="app container" style={{ display: "grid", gap: 20, padding: 20 }}>
      <h2 style={{ marginBottom: 10 }}>🔐 Login</h2>
      <form onSubmit={handleLogin} style={{ display: "grid", gap: 12 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" className="btn">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span
          style={{ color: "#2563eb", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
