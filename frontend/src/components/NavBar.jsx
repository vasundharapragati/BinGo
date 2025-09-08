import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Schedule", path: "/schedule" },
    { name: "Track", path: "/track" },
    { name: "Alerts", path: "/alerts" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="bg-white border-t flex justify-around p-2 fixed bottom-0 w-full">
      {navItems.map(item => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${isActive ? "text-green-600" : "text-gray-500"}`
          }
        >
          <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;
