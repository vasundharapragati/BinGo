import React from "react";

function TopBar({ userName }) {
  return (
    <div className="bg-green-600 text-white flex justify-between items-center p-4">
      <h1 className="font-bold text-lg">BinGo</h1>
      <h1>Hello, Vasundhara! (Test)</h1>

      <div className="flex items-center gap-2">
        <span>Hello, {userName}!</span>
        <div className="w-8 h-8 bg-white rounded-full"></div> {/* Profile Icon */}
      </div>
    </div>
  );
}

export default TopBar;
