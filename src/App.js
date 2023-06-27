import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container--app">
          <div className="background"></div>
          <div id="frame"></div>
          <Navbar />
        </div>
        <div className="content--app">
          <Routes>
            <Route path="/" element={<About />} exact />
            <Route path="/About" element={<About />} exact />
            <Route path="/Projects" element={<Projects />} exact />
            <Route path="/Footer" element={<Footer />} exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

