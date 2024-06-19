import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Login/Dashboard";
import Buttons from "./pages/Login/Buttons";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/button" element={<Buttons />} />
      </Routes>
    </>
  );
}

export default Router;
