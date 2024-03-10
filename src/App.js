// App.js
import React from "react";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Organize from "./components/Organize";
import Register from "./components/Register";
import WatchLive from "./components/WatchLive";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/organize" element={<Organize />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch_live" element={<WatchLive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
