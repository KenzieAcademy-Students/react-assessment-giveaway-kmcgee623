import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Confirmation from "./components/Confirmation";
import Register from "./components/Register";
import "./App.css";
import Welcome from "./components/Welcome";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
        <Route path="/confirmation" element={<Confirmation state={user} />} />
        <Route path="/register" element={<Register handleSubmit={handleSubmit} handleChange={handleChange} state={user} />} />
      </Routes>
    </div>

  );
};

export default App;
