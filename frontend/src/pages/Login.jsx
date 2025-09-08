import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "vasundharapragati30@gmail.com" && password === "123456") {
      navigate("/"); // Navigate to Home on success
    } else {
      alert("Invalid credentials! Please check email or password.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold mb-4">BinGo Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 bg-white p-4 rounded shadow">
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
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Login</button>
      </form>
      <p className="mt-2">
        Don't have an account? <span onClick={() => navigate("/register")} className="text-green-600 cursor-pointer">Sign Up</span>
      </p>
    </div>
  );
}

export default Login;
