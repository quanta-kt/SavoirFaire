import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Firebase } from "./service/firebase";
import Card from "./components/Card";
import Listing from "./pages/Listing";
function App() {
  return (
    <Firebase>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
        <Footer />
      </Router>
    </Firebase>
  );
}

export default App;
