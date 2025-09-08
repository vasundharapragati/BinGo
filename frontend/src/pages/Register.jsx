import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Account Created!\nName: ${name}\nEmail: ${email}\nCity: ${city}`);
    navigate("/login"); // Redirect to login
    // Later, send this data to backend API
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold mb-4">BinGo Sign Up</h1>
      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4 bg-white p-4 rounded shadow">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
      </form>
      <p className="mt-2">
        Already have an account? <span onClick={() => navigate("/login")} className="text-green-600 cursor-pointer">Login</span>
      </p>
    </div>
  );
}

export default Register;
