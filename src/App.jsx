import "./index.css";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { Firebase } from "./service/firebase";
import Listing from "./pages/Listing,";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import NewLogin from "./pages/NewLogin";

function App() {
  return (
    <Firebase>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path="l" element={<Landing />} />
            <Route path="l" element={<Landing />} />
            <Route path="n" element={<NewLogin />} />
          </Route>
        </Routes>
      </Router>
    </Firebase>
  );
}

export default App;
