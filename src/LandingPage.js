import React from "react";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 bg-white shadow rounded-3xl m-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
            {/* Placeholder for logo */}
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="text-2xl font-semibold text-gray-800">Octagos</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-500">Solutions</a>
          <a href="#" className="hover:text-blue-500">Products</a>
          <a href="#" className="hover:text-blue-500">Company</a>
          <a href="#" className="hover:text-blue-500">Resources</a>
          <a href="#" className="hover:text-blue-500">Pricing</a>
          <a href="#" className="hover:text-blue-500">#CIS 2024</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="px-5 py-2 border-2 border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-50">Log in</Link>
          <button className="px-5 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800">Book a demo</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 max-w-3xl leading-tight">
          The Future of Cardiac Monitoring: Empowered by <span className="text-cyan-500">Atlas AI™</span>
        </h1>
        <div className="flex space-x-4 mt-8">
          <button className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold text-lg hover:bg-blue-800">Book a demo</button>
          <button className="px-8 py-3 border-2 border-blue-700 text-blue-700 rounded-full font-semibold text-lg hover:bg-blue-50 flex items-center">
            See it in action
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Floating Info Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Example cards, position with absolute/fixed and transform */}
          <div className="absolute left-10 top-32 bg-white shadow-lg rounded-xl px-4 py-3 flex flex-col items-start w-40">
            <span className="text-xs text-gray-400 mb-1">HEART RATE</span>
            <span className="text-lg font-semibold">120 bpm</span>
            <div className="w-full h-6 bg-gray-100 rounded mt-2" />
          </div>
          <div className="absolute right-10 top-40 bg-white shadow-lg rounded-xl px-4 py-3 flex flex-col items-start w-44">
            <span className="text-xs text-gray-400 mb-1">DEVICE</span>
            <span className="text-sm font-semibold">MDT Claria CRT-D</span>
            <span className="text-xs text-gray-500">2/1/2023</span>
            <span className="text-xs text-gray-500">Serial: 555232</span>
          </div>
          <div className="absolute left-24 bottom-32 bg-white shadow-lg rounded-xl px-4 py-3 flex flex-col items-start w-36">
            <span className="text-xs text-gray-400 mb-1">RV IMPEDANCE</span>
            <span className="text-lg font-semibold">2100 Ω</span>
          </div>
          <div className="absolute right-24 bottom-40 bg-white shadow-lg rounded-xl px-4 py-3 flex flex-col items-start w-36">
            <span className="text-xs text-gray-400 mb-1">BLOOD COUNT</span>
            <span className="text-lg font-semibold">64/80</span>
            <div className="w-full h-6 bg-gray-100 rounded mt-2" />
          </div>
          {/* Add more cards as needed for realism */}
        </div>
      </main>
    </div>
  );
} 