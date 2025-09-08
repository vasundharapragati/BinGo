import React, { useState } from "react";

function Schedule() {
  const [wasteType, setWasteType] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pickup Scheduled!\n
      Waste Type: ${wasteType}\n
      Weight: ${weight} kg\n
      Address: ${address}\n
      Date: ${date}\n
      Time: ${time}\n
      Instructions: ${instructions}`);
    // Here you will later send data to backend API
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-lg">Schedule Pickup</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label>Waste Type</label>
          <input
            type="text"
            value={wasteType}
            onChange={(e) => setWasteType(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Plastic, Metal, Paper..."
            required
          />
        </div>
        <div>
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Pickup Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter full address"
            required
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>
        <div>
          <label>Special Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Any instructions for the collector"
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white p-2 rounded w-full">
          Schedule Pickup
        </button>
      </form>
    </div>
  );
}

export default Schedule;
