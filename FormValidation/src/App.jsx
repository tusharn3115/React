import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be 8 characters !!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password and Confirm Passwords must be same !!");
      return;
    }
    if (!/[!@#$%^&*(),":;|~]/.test(password)) {
      setError("Password must contain any special character !!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain any capital letter !!");
      return;
    }

    // Show success toast
    toast.success("Login Successful 🎉", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
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
              required
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
              required
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
              required
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
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="password"
              placeholder="Re-enter password"
            />
          </div>

          {error && <p className="text-center text-red-600 text-sm">{error}</p>}

          <button className="text-lg active:scale-95 duration-300 px-4 py-2 font-semibold mt-2 w-full rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;