import "./index.css";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { Firebase } from "./service/firebase";
import Listing from "./pages/Listing,";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import NewLogin from "./pages/NewLogin";
// import NewLogin2 from "./pages/NewLogin2";
import Demopage from "./pages/Demopage";
import Details from "./pages/Details";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Firebase>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dp" element={<Demopage />} />
          <Route path="/n" element={<NewLogin />} />
          {/* <Route path="/m" element={<NewLogin2 />} /> */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path="l" element={<Landing />} />
            <Route path="property/:propertyId" element={<Details />} />

            <Route path="l" element={<Landing />} />
            <Route path="n" element={<NewLogin />} />
            <Route path="map/:lat/:lon" element={<MapPage />} />
          </Route>
        </Routes>
      </Router>
    </Firebase>
  );
}

export default App;
