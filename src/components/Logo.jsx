import React from "react";

function Logo({ width = "100px" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="48" fill="#0073AA" stroke="#333" strokeWidth="2" />
      <circle cx="50" cy="50" r="44" fill="#fff" />
      <text 
        x="50%" 
        y="55%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontFamily="Georgia, serif" 
        fontSize="40" 
        fill="#0073AA" 
        fontWeight="bold"
      >
        B
      </text>
      <path d="M30 60 Q50 100, 70 60" stroke="#0073AA" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="#0073AA" strokeWidth="2" />
    </svg>
  );
}

export default Logo;
