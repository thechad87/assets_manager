import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      navigate("/assets");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side: Branding */}
      <div className="w-1/2 bg-[#002885] flex flex-col justify-center px-16 py-12 text-white relative">
        <div className="flex items-center mb-16">
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-2xl">C</span>
          </div>
          <span className="text-3xl font-semibold">Octagos</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
          The Future of Cardiac<br />Remote Monitoring<br />Empowered by <span className="text-cyan-300">Atlas AI™</span>
        </h1>
        {/* Decorative circles */}
        <div className="absolute left-0 bottom-0 w-full h-1/3 flex items-end">
          <svg width="100%" height="100%" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="200" r="100" fill="url(#paint0_radial)" fillOpacity="0.7" />
            <circle cx="500" cy="200" r="80" stroke="#00CFFF" strokeWidth="3" fill="none" />
            <circle cx="500" cy="200" r="60" stroke="#00CFFF" strokeWidth="2" fill="none" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(500 200) scale(100)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00CFFF" />
                <stop offset="1" stopColor="#002885" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Right side: Login form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white relative">
        <div className="w-full max-w-md px-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <span className="text-2xl font-semibold text-gray-800">Octagos</span>
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Welcome back!</h2>
          <p className="text-gray-500 text-center mb-6">Use your work email to sign in to the app.</p>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address*"
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#002885] text-white rounded-full py-3 font-semibold text-lg hover:bg-blue-900 transition"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="absolute bottom-6 right-8 text-gray-400 text-sm flex space-x-4">
          <span>©2025 All rights reserved.</span>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
} 