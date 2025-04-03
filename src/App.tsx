import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Router>
        <div className="App-container">
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

// Run with 'npm start'