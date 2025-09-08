import React from "react";

function Profile() {
  const user = {
    name: "Vasundhara Pragati",
    email: "vasundharapragati30@gmail.com",
    phone: "9315962168",
    city: "Noida"
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-lg">Profile</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>City:</strong> {user.city}</p>
      </div>
      <div className="space-y-2">
        <button className="w-full bg-gray-200 p-2 rounded">Settings</button>
        <button className="w-full bg-gray-200 p-2 rounded">Notifications</button>
        <button className="w-full bg-gray-200 p-2 rounded">Payment Methods</button>
        <button className="w-full bg-gray-200 p-2 rounded">Help & Support</button>
        <button className="w-full bg-gray-200 p-2 rounded">Privacy Policy</button>
        <button className="w-full bg-red-500 text-white p-2 rounded">Sign Out</button>
      </div>
    </div>
  );
}

export default Profile;
