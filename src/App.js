import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Confirmation from "./components/Confirmation";
import Register from "./components/Register";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
