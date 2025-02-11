import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#1c1c1c] p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-96">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="password"
              placeholder="Re-enter password"
            />
          </div>
          <button className="text-lg active:scale-95 duration-300 px-4 py-2 font-semibold mt-2 w-full rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
