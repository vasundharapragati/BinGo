import React from "react";

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">{title}</h3>
      <div>{value}</div>
    </div>
  );
}

export default Card;
