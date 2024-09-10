import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    // <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
    //     {children}
    // </button>
    <button
      className={`
        px-4 py-2
        font-semibold
        rounded-lg
        hover:bg-blue-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-colors
        duration-300 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
