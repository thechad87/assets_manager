import React from "react";
import { Link } from 'react-router-dom';

const assets = [
  {
    name: "Macbook PRO M1 13'' (2021)",
    assigned: "Bagus Fikri",
    category: "Laptop",
    serial: "C03VX2M6JG00",
    price: "$557.85 (2021)",
    depreciation: "$340 -3%",
    image: "https://img.icons8.com/color/48/000000/macbook-pro.png"
  },
  {
    name: "Macbook Air M1 (2020)",
    assigned: "Ihdizein",
    category: "Laptop",
    serial: "D04LY8N3K90A",
    price: "$739.65 (2020)",
    depreciation: "$479.58 -14%",
    image: "https://img.icons8.com/color/48/000000/macbook-air.png"
  },
  // ... more rows as needed
];

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-6">
        <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">O</span>
        </div>
        {/* Sidebar icons */}
        <div className="flex flex-col space-y-6 text-gray-400">
          <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"><i className="fas fa-home"></i></span>
          <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"><i className="fas fa-laptop"></i></span>
          <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"><i className="fas fa-file-alt"></i></span>
          <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"><i className="fas fa-cog"></i></span>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6 bg-white shadow rounded-3xl m-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-semibold text-gray-800">Assets</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800">Import</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Export</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">Add Assets</button>
          </div>
        </header>
        {/* Filters */}
        <div className="flex items-center space-x-4 px-10 pb-4">
          <input type="text" placeholder="Search" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>Lend date</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>Return date</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>Category</option>
          </select>
          <button className="px-3 py-2 border border-gray-300 rounded-lg flex items-center space-x-2">
            <span>Advance Filter</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="flex-1"></div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-600 text-sm">Transfer assets</span>
          </label>
        </div>
        {/* Table */}
        <div className="flex-1 overflow-auto px-10 pb-10">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                <th className="px-4 py-3 font-semibold">Assets name</th>
                <th className="px-4 py-3 font-semibold">Assigned to</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold"># Serial number</th>
                <th className="px-4 py-3 font-semibold">Buy price</th>
                <th className="px-4 py-3 font-semibold">Depreciation</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <tr key={idx} className="border-b last:border-b-0 hover:bg-blue-50 transition">
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <img src={asset.image} alt="asset" className="w-8 h-8 rounded" />
                    <span>{asset.name}</span>
                  </td>
                  <td className="px-4 py-3">{asset.assigned}</td>
                  <td className="px-4 py-3">{asset.category}</td>
                  <td className="px-4 py-3">{asset.serial}</td>
                  <td className="px-4 py-3">{asset.price}</td>
                  <td className="px-4 py-3">{asset.depreciation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 