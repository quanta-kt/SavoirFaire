import "./index.css";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { Firebase } from "./service/firebase";
import Listing from "./pages/Listing";
function App() {
  return (
    <Firebase>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/l" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </Firebase>
  );
}

export default App;
