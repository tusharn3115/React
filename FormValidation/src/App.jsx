import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/Users";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!/[!@#$%^&*(),":;|~]/.test(formData.password)) {
      setError("Password must contain a special character!");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain an uppercase letter!");
      return;
    }

    setUsers((prevData) => [
      ...prevData,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ]);

    toast.success("User Added Successfully 🎉", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    setError("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1c1c1c] p-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-96">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChanges}
                className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChanges}
                className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                required
                name="password"
                value={formData.password}
                onChange={handleChanges}
                className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChanges}
                className="w-full border text-gray-700 border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                type="password"
                placeholder="Re-enter password"
              />
            </div>

            {error && (
              <p className="text-center text-red-600 text-sm">{error}</p>
            )}

            <button className="text-lg active:scale-95 duration-300 px-4 py-2 font-semibold mt-2 w-full rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all">
              Submit
            </button>
          </form>
        </div>

        <div className="mt-6 w-full max-w-3xl">
          <Users users={users} />
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default App;
