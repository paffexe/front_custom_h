import React from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const nav = useNavigate();

  return (
    <div>
      This page belongs to Service
      <button onClick={() => nav("/contact")} className="text-pink-600">Contact</button>
    </div>
  );
};

export default Service;
