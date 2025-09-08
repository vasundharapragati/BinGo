import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card title="Earnings" value="₹0" />
        <Card title="Recycled" value="0 kg" />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold">Quick Actions</h2>
        <div className="flex gap-2">
          <button className="flex-1 bg-green-600 text-white p-2 rounded">Schedule Pickup</button>
          <button className="flex-1 bg-gray-200 p-2 rounded">Track Pickups</button>
        </div>
      </div>
      <Card title="Recent Activity" value="No recent pickups" />
      <Card title="Environmental Impact" value={<>
        CO₂ Saved: 0 kg<br/>
        Trees Saved: 0<br/>
        Water Saved: 0 L
      </>} />
    </div>
  );
}

export default Home;
