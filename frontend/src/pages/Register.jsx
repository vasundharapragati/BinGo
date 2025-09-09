import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../utils/storage";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    storage.setUser({ name, email, password });
    storage.setAuth(true);
    navigate("/home");
  };

  return (
    <div className="app container" style={{ display: "grid", gap: 20, padding: 20 }}>
      <h2 style={{ marginBottom: 10 }}>📝 Sign Up</h2>
      <form onSubmit={handleRegister} style={{ display: "grid", gap: 12 }}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
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
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          style={{ color: "#2563eb", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Login
        </span>
      </p>
    </div>
  );
}
