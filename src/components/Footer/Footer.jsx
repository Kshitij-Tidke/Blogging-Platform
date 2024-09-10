// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 flex items-center justify-center flex-col">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" className="mr-3">
          <circle cx="50" cy="50" r="48" fill="#0073AA" stroke="#333" strokeWidth="2" />
          <circle cx="50" cy="50" r="44" fill="#fff" />
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontSize="40" fill="#0073AA" fontWeight="bold">B</text>
          <path d="M30 60 Q50 100, 70 60" stroke="#0073AA" strokeWidth="3" fill="none" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="#0073AA" strokeWidth="2" />
        </svg>
        <p className="text-lg">© Copyright 2023. All Rights Reserved by DevUI.</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
        <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
