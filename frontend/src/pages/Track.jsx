import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Track() {
  // Example pickup locations (latitude & longitude)
  const [pickups] = useState([
    { id: 1, name: "Pickup #1", lat: 28.6139, lng: 77.209 }, // Delhi
    { id: 2, name: "Pickup #2", lat: 28.7041, lng: 77.1025 }, // Noida
  ]);

  const containerStyle = {
    width: "100%",
    height: "300px"
  };

  const center = {
    lat: 28.6139,
    lng: 77.209
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-lg">Track Your Pickups</h2>

      <LoadScript googleMapsApiKey="AIzaSyAuUjumfGhKzXslfYh3wq8LjQSQNlpdXVM">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {pickups.map((pickup) => (
            <Marker key={pickup.id} position={{ lat: pickup.lat, lng: pickup.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="space-y-2">
        {pickups.map((pickup) => (
          <div key={pickup.id} className="p-2 border rounded shadow bg-white">
            <strong>{pickup.name}:</strong> Collector is approaching
          </div>
        ))}
      </div>
    </div>
  );
}

export default Track;
