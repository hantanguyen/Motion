import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "./home"; 
import About from "./about"; 
import Music from "./music";

function App() {
  useEffect(() => {
    document.title = "Motion";
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/music" element={<Music />} />

      </Routes>
    </Router>
  );
}

export default App;