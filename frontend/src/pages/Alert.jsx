import React from "react";

function Alert() {
  const notifications = [
    { title: "Collector Approaching", message: "Your collector is 5 minutes away from your location", time: "30m ago" },
    { title: "Collector Assigned", message: "A verified collector has been assigned to your metal waste pickup", time: "2h ago" }
  ];

  return (
    <div className="p-4 space-y-2">
      <h2 className="font-bold text-lg">Notifications</h2>
      {notifications.map((notif, idx) => (
        <div key={idx} className="p-3 border rounded shadow bg-white">
          <h3 className="font-semibold">{notif.title}</h3>
          <p className="text-sm">{notif.message}</p>
          <p className="text-xs text-gray-400">{notif.time}</p>
        </div>
      ))}
      {notifications.length === 0 && <p>No notifications</p>}
    </div>
  );
}

export default Alert;
