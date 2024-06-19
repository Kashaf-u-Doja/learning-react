import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <a href="/dashboard">Dashboard</a>
    </>
  );
}

export default Buttons;
